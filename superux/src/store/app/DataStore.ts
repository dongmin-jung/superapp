import { action, observable, makeObservable } from 'mobx';

import { WidgetID } from 'model/widget/CommonWidgetProperties';
import { boundMethod } from 'autobind-decorator';
import { isDefined, isNotNull, isUndefined } from 'util/TypeUtils';
import { dLog, dWarn } from 'util/DebugUtils';

/**
 * Type of Data's ID.
 */
export type DataID = string;

/**
 * Type of Property's Name.
 */
export type PropertyName = string;

/**
 * Type of Property's Value.
 */
export type PropertyValue = any;

/**
 * Type of View Component's Properties.
 */
export type ViewPropertyMap = Map<PropertyName, PropertyValue>;

/**
 * Global Data of View Component: Pre-set of View Component.
 */
export interface ViewValue {
    componentType: string;
    contentProperties: ViewPropertyMap;
    styleProperties: ViewPropertyMap;
    logicProperties: ViewPropertyMap;
    reference: WidgetID[];
}

/**
 * Type of View Component Data.
 */
export type ViewData = Map<DataID, ViewValue>;

/**
 * Type of Reference Component's Name.
 */
export type ComponentID = number;

/**
 * Type of Argument Reference.
 */
export type propertyReference = Map<ComponentID, PropertyName>;

/**
 * Global Data of Argument for Property of View Component and Business Component.
 */
export interface ArgumentValue {
    dataType?: string;
    dataValue: PropertyValue;
    contentReference?: propertyReference;
    styleReference?: propertyReference;
    logicReference?: propertyReference;
}

/**
 * Type of Argument Data.
 */
export type ArgumentData = Map<DataID, ArgumentValue>;

/**
 * Widget Property Value Type
 */
export type WidgetPropertyType = boolean | number | string;

/**
 * WidgetDataMap의 widget id 당 설정되는 'key: property name, value: property value' map
 */
export type WidgetPropertyMap = Map<string, WidgetPropertyType>;

/**
 * widget에서 사용하는 global data(property) map
 */
export type WidgetDataMap = Map<WidgetID, WidgetPropertyMap>;

/**
 * global data를 관리하는 store
 * 사용하는 경우는 다음과 같습니다.
 * widget(view component)에서 html attribute 중의 data로 사용하는 경우
 * business logic에서 argument로 사용하는 경우
 * business logic에서 service call로 받은 DTO를 사용하는 경우
 * 고민: map에서 widget/logic의 id를 알고 있어야 하는가 = map이 2 depth인 이유
 * TODO: map.delete() 시나리오에 따른 추가 구현 필요
 */
class DataStore {
    /**
     * Global Data of View Component
     */
    @observable
    viewData: ViewData = new Map<DataID, ViewValue>();

    /**
     * Global Data of Argument
     */
    @observable
    argumentData: ArgumentData = new Map<DataID, ArgumentValue>();

    /**
     * widget에서 사용하는 global Property map
     * 1st depth map - key: widget id, value: widget property map
     * 2nd depth map - key: widget property name, value: widget property value
     */
    @observable
    widgetDataMap: WidgetDataMap = new Map<WidgetID, WidgetPropertyMap>();

    /**
     * business logic에서 사용하는 argument map
     * 1st depth map - key: business logic id, value: business logic argument map
     * 2nd depth map - key: business logic argument name, value: business logic argument value
     */
    @observable
    businessArgumentMap: Map<number, Map<string, any>> = new Map();

    /**
     * business logic에서 service call로 받은 DTO map
     * 1st depth map - key: business logic id, value: business logic DTO map
     * 2nd depth map - key: business logic DTO name, value: business logic DTO value
     */
    @observable
    businessDtoMap: Map<number, Map<string, any>> = new Map();

    /**
     * data store 생성자
     */
    constructor() {
        makeObservable(this);
        this.init();
        dLog('Data Store Created.');
    }

    /**
     *
     */
    init() {
        this.argumentData.set('state', { dataValue: 'all' });
        this.argumentData.set('todoDTOList', { dataValue: new Map<number, any>() });
        this.argumentData.set('filteredData', { dataValue: [] });
        this.argumentData.set('left', { dataValue: 0 });
        this.argumentData.set('isChecked', { dataValue: false });
    }

    /**
     * data store clear 함수
     */
    clear() {
        this.clearViewData();
        this.clearArgumentData();
        this.widgetDataMap.clear();
        this.businessArgumentMap.clear();
        this.businessDtoMap.clear();
    }

    /**
     * Get View Data.
     */
    @boundMethod
    getViewData(): ViewData {
        return this.viewData;
    }

    /**
     * Set View Data.
     */
    @action
    setViewData(viewData: ViewData): void {
        this.viewData = viewData;
    }

    /**
     * Clear View Data.
     */
    @action
    clearViewData(): void {
        this.viewData = new Map<DataID, ViewValue>();
        // this.test();
    }

    /**
     * Get View Value by Data ID.
     */
    @boundMethod
    getViewValue(dataID: DataID): ViewValue {
        let viewValue: ViewValue | undefined = this.viewData.get(dataID);
        if (isUndefined(viewValue)) {
            dWarn(`No data with ${dataID}!`);
            viewValue = {
                componentType: 'Error',
                contentProperties: new Map<PropertyName, PropertyValue>(),
                styleProperties: new Map<PropertyName, PropertyValue>(),
                logicProperties: new Map<PropertyName, PropertyValue>(),
                reference: [],
            };
        }
        return viewValue;
    }

    /**
     * Get Argument Data.
     */
    @boundMethod
    getArgumentData(): ArgumentData {
        return this.argumentData;
    }

    /**
     * Set Argument Data.
     */
    @action
    setArgumentData(argumentData: ArgumentData): void {
        this.argumentData = argumentData;
    }

    /**
     * Clear Argument Data.
     */
    @action
    clearArgumentData(): void {
        this.argumentData = new Map<DataID, ArgumentValue>();
    }

    /**
     * return widget data map
     */
    @boundMethod
    getWidgetDataMap(): WidgetDataMap {
        return this.widgetDataMap;
    }

    /**
     * return widget property map by widget id
     */
    @boundMethod
    getWidgetPropertyMap(widgetID: WidgetID): WidgetPropertyMap | undefined | null {
        if (this.widgetDataMap.has(widgetID)) {
            return this.widgetDataMap.get(widgetID);
        }
        return null;
    }

    /**
     * return widget property value by widget id and property name
     */
    @boundMethod
    getWidgetDataValue(widgetID: WidgetID, propertyName: string): WidgetPropertyType | null {
        const dataMap = this.getWidgetPropertyMap(widgetID);
        if (isNotNull(dataMap) && isDefined(dataMap)) {
            if (dataMap.has(propertyName)) {
                const value: WidgetPropertyType | undefined = dataMap.get(propertyName);
                if (isDefined(value)) {
                    return value;
                }
            }
            return null;
        }
        return null;
    }

    /**
     * return business logic argument map
     */
    @boundMethod
    getBusinessArgumentMap(): Map<number, Map<string, any>> {
        return this.businessArgumentMap;
    }

    /**
     * return business logic DTO map
     */
    @boundMethod
    getBusinessDtoMap(): Map<number, Map<string, any>> {
        return this.businessDtoMap;
    }

    /**
     * set WidgetDataMap
     * command framework의 apply, unapply, reapply를 위해 map, prevMap으로 바꿔서 set을 해야해서 이와 같이 구현함
     */
    @action
    setWidgetDataMap(widgetDataMap: WidgetDataMap): void {
        this.widgetDataMap = widgetDataMap;
    }

    /**
     * set widget data map
     * Map.prototype.set()은 이미 중복된 key인 경우는 value를 업데이트하기 때문에 check하는 로직은 넣지 않음
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
     */
    @action
    setWidgetPropertyMap(widgetID: WidgetID, propertyName: string, propertyValue: any): void {
        if (!this.widgetDataMap.has(widgetID)) {
            const widgetPropertyMap = new Map<string, any>();
            widgetPropertyMap.set(propertyName, propertyValue);
            this.widgetDataMap.set(widgetID, widgetPropertyMap);
        } else {
            const widgetPropertyMap = this.getWidgetPropertyMap(widgetID);
            // 공통 로직을 뺄려고 했으나 undefined/null 확인이 안되어 TS컴파일러에서 오류로 처리됨
            if (isNotNull(widgetPropertyMap) && isDefined(widgetPropertyMap)) {
                widgetPropertyMap.set(propertyName, propertyValue);
                this.widgetDataMap.set(widgetID, widgetPropertyMap);
            }
        }
    }

    /**
     * set business logic argument map
     */
    @action
    setBusinessArgumentMap(businessLogicID: number, argumentName: string, argumentValue: any): void {
        const businessArgumentMap = new Map();
        businessArgumentMap.set(argumentName, argumentValue);
        this.businessArgumentMap.set(businessLogicID, businessArgumentMap);
    }

    /**
     * set business logic DTO map
     */
    @action
    setBusinessDtoMap(businessLogicID: number, dtoName: string, dtoValue: any): void {
        const businessDtoMap = new Map();
        businessDtoMap.set(dtoName, dtoValue);
        this.businessDtoMap.set(businessLogicID, businessDtoMap);
    }
}

export default DataStore;