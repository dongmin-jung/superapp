import BusinessComponentClientService from 'store/command/handler/business/service/BusinessComponentClientService';
import toastMessageStyles from 'style/widget-editor/widget/ToastMessage.scss';
import { BusinessLogicEnum, ExecuteBusinessComponentProps } from 'model/business/BusinessPresetManager';
import { isDefined } from 'util/TypeUtils';

/**
 * BusinessComponent의 Logic 중 Basic한 동작 모음
 */
class BusinessComponentBasicClientService extends BusinessComponentClientService {
    private toastTimeout: ReturnType<typeof setTimeout>;

    /**
     * 생성자
     *  1. 토스트 메세지 setTimeout 정의
     */
    public constructor() {
        super();
        this.toastTimeout = setTimeout(function () {
            /* callback Function 정의 */
        }, 0);
    }

    /**
     * BusinessComponentBasicClientService Execute 함수
     */
    public execute(props: ExecuteBusinessComponentProps): void {
        switch (props.businessType) {
            case BusinessLogicEnum.SHOW_ALERT:
                this.showAlert(props);
                break;
            case BusinessLogicEnum.SHOW_CONFIRM:
                this.showConfirm(props);
                break;
            case BusinessLogicEnum.SHOW_TOAST:
                this.showToastMessage(props);
                break;
            case BusinessLogicEnum.CLOSE_APP:
                this.closeApp();
                break;
            case BusinessLogicEnum.OPEN_URL:
                this.openURL(props);
                break;
            default:
                break;
        }
    }

    /**
     * alert Message Box
     * using window.alert
     */
    private showAlert(props: ExecuteBusinessComponentProps): void {
        if (isDefined(props.args)) {
            window.alert(props.args);
        }
    }

    /**
     * show Confirm Message Box
     * using window.confirm
     */
    private showConfirm(props: ExecuteBusinessComponentProps): void {
        if (isDefined(props.args)) {
            window.confirm(props.args);
        }
    }

    /**
     * show Toast Message
     * using <div> tags styling with css file
     * render on app or editor component
     */
    private showToastMessage(props: ExecuteBusinessComponentProps): void {
        const toastMessage = document.getElementById('superux-toast');
        if (toastMessage !== null) {
            if (isDefined(props.args)) {
                clearTimeout(this.toastTimeout);
                toastMessage.className = toastMessageStyles.showToast;
                toastMessage.innerHTML = props.args;
                this.toastTimeout = setTimeout(function () {
                    toastMessage.className = toastMessageStyles.closeToast;
                    toastMessage.innerHTML = '';
                }, 3000);
            }
        }
    }

    /**
     * close App
     * using window.close
     */
    private closeApp(): void {
        window.close();
    }

    /**
     * open url on new window
     * using window.open
     */
    private openURL(props: ExecuteBusinessComponentProps): void {
        if (isDefined(props.args)) {
            window.open(props.args);
        }
    }
}

export default BusinessComponentBasicClientService;
