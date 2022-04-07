import CommandEnum from 'model/command/CommandEnum';
import { WidgetID } from 'model/widget/CommonWidgetProperties';
import DataStore from 'store/app/DataStore';
import UIStore from 'store/app/UIStore';
import BusinessComponentServiceFactory from 'store/command/handler/business/BusinessComponentServiceFactory';
import BusinessComponentServiceMapper from 'store/command/handler/business/BusinessComponentServiceMapper';

/**
 * LogicType Enum
 */
export enum BusinessLogicEnum {
    NONE = 0, // 로직 연결 안됨
    CUSTOM, // 에디터로 작성한 코드
    SHOW_ALERT,
    SHOW_CONFIRM,
    SHOW_TOAST,
    MOVE_PAGE,
    MOVE_INNER_PAGE,
    CLOSE_APP,
    OPEN_URL,
    SHOW_GPS,
    CALL,
    WEATHER,
    SHOW_DIALOG,
    CLOSE_DIALOG,
    SET_VALUE,
}

export type ExecuteBusinessComponentProps = {
    commandID: CommandEnum.EXECUTE_BUSINESS_LOGIC;
    businessType: BusinessLogicEnum;
    widgetID?: WidgetID;
    args?: string;
};

/**
 * Custom Logic을 작성할 때 사용자가 필요한 데이터와
 * 정의된 Preset을 편리하게 사용하기 위해서 넘겨지는 객체
 */
class BusinessPresetManager {
    private uiStore: UIStore;

    private dataStore: DataStore;

    private businessComponentServiceMapper: BusinessComponentServiceMapper;

    /**
     * BusinessPresetManager에서 사용할 수 있는 Preset 집합
     */
    public preset = {
        showAlert: BusinessLogicEnum.SHOW_ALERT,
        showConfirm: BusinessLogicEnum.SHOW_CONFIRM,
        showToast: BusinessLogicEnum.SHOW_TOAST,
        closeApp: BusinessLogicEnum.CLOSE_APP,
        openURL: BusinessLogicEnum.OPEN_URL,
    };

    /**
     * BusinessPresetManager 생성자
     */
    public constructor(uiStore: UIStore, dataStore: DataStore) {
        this.uiStore = uiStore;
        this.dataStore = dataStore;
        this.businessComponentServiceMapper = new BusinessComponentServiceMapper(new BusinessComponentServiceFactory());
    }

    /**
     * Business Preset 실행 함수
     *
     * @param businessType ex) businessPresetManager.showAlert
     * @param args ex) 'hi' / 123 ...
     */
    public run(businessType: BusinessLogicEnum, args: string = '') {
        const executeBusinessComponentProps: ExecuteBusinessComponentProps = {
            commandID: CommandEnum.EXECUTE_BUSINESS_LOGIC,
            businessType,
            args,
        };
        this.businessComponentServiceMapper
            .get(executeBusinessComponentProps.businessType)
            ?.some(service => service.execute(executeBusinessComponentProps, this.uiStore, this.dataStore));
    }
}

export default BusinessPresetManager;
