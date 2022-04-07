import BusinessComponentClientService from 'store/command/handler/business/service/BusinessComponentClientService';
import BusinessPresetManager, { ExecuteBusinessComponentProps } from 'model/business/BusinessPresetManager';
import UIStore from 'store/app/UIStore';
import DataStore from 'store/app/DataStore';
import { isDefined, isUndefined } from 'util/TypeUtils';

export const businessLogicDefaultCodeString: string = '(businessPresetManager) => { \n // add code here \n  \n }';

/**
 * BusinessComponent의 Custom Code 실행 부분입니다.
 */
class BusinessComponentCustomClientService extends BusinessComponentClientService {
    private businessPresetManager?: BusinessPresetManager = undefined;

    /**
     * 실행할 수 있도록 사용자 코드와 합치는 함수
     *
     * @param argsJScode props.args
     * @returns merged JS code
     */
    public composeBusinessLogicJSCode(argsJScode: string): string {
        const jsCode = `(${argsJScode})(businessPresetManager)`;
        return jsCode;
    }

    /**
     * BusinessComponent Custom 로직 실행 함수
     *
     * @param props 비즈니스 로직 실행 CommandProps
     * @param ctx appContext
     */
    public execute(props: ExecuteBusinessComponentProps, uiStore: UIStore, dataStore: DataStore): void {
        const argsJScode = props?.args;
        if (isUndefined(this.businessPresetManager)) {
            this.businessPresetManager = new BusinessPresetManager(uiStore, dataStore);
        }
        if (isDefined(argsJScode)) {
            const businessLogicJSCode = this.composeBusinessLogicJSCode(argsJScode);
            /* eslint-disable-next-line no-new-func */
            new Function('businessPresetManager', businessLogicJSCode)(this.businessPresetManager);
        }
    }
}

export default BusinessComponentCustomClientService;
