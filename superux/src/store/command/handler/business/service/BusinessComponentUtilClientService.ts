import BusinessComponentClientService from 'store/command/handler/business/service/BusinessComponentClientService';
import UIStore from 'store/app/UIStore';
import DataStore from 'store/app/DataStore';
import { ExecuteBusinessComponentProps } from 'model/business/BusinessPresetManager';
import { isDefined } from 'util/TypeUtils';

/**
 * BusinessComponent의 DataStore 관련 작업 서비스 모음
 */
class BusinessComponentUtilClientService extends BusinessComponentClientService {
    /**
     * BusinessComponent Util로직 실행
     *
     * @param props 비즈니스 로직 실행 CommandProps
     * @param ctx appContext
     */
    public execute(props: ExecuteBusinessComponentProps, uiStore?: UIStore, dataStore?: DataStore): void {
        if (isDefined(props.args)) {
            const widgetID = JSON.parse(props.args).targetWidgetID;
            const widgetPropertyName = JSON.parse(props.args).targetWidgetPropertyName;
            const widgetPropertyValue = JSON.parse(props.args).targetWidgetPropertyValue;
            dataStore?.setWidgetPropertyMap(Number(widgetID), widgetPropertyName, widgetPropertyValue);
        }
    }
}

export default BusinessComponentUtilClientService;
