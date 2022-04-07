import BusinessComponentClientService from 'store/command/handler/business/service/BusinessComponentClientService';
import { makePageURL } from 'window/Window';
import QueryString from 'qs';
import UIStore from 'store/app/UIStore';
import DataStore from 'store/app/DataStore';
import { BusinessLogicEnum, ExecuteBusinessComponentProps } from 'model/business/BusinessPresetManager';
import { isDefined } from "util/TypeUtils";

/**
 * BusinessComponent의 API 호출이 필요한 서비스 모음입니다.
 * 각 서비스를 구현하는 곳에서 구현할 예정인 api들이 시연을 위해 필요할 때가 있어
 * 분리해둔 상태
 */
class BusinessComponentLayoutClientService extends BusinessComponentClientService {
    /**
     * BusinessComponentLayoutClientService로 배정된 비즈니스 로직 실행
     *
     * @param props 비즈니스 로직 실행 CommandProps
     * @param ctx appContext
     */
    public execute(props: ExecuteBusinessComponentProps, uiStore: UIStore, dataStore: DataStore): void {
        switch (props.businessType) {
            case BusinessLogicEnum.MOVE_PAGE:
                this.movePage(props);
                break;
            case BusinessLogicEnum.MOVE_INNER_PAGE:
                this.moveInnerPage(props);
                break;
            case BusinessLogicEnum.SHOW_DIALOG:
                this.showDialog(props, uiStore);
                break;
            case BusinessLogicEnum.CLOSE_DIALOG:
                this.closeDialog(uiStore);
                break;
            default:
                break;
        }
    }

    /**
     * 페이지 이동 Logic
     *
     * @param props Execute props
     * @param ctx appContext
     */
    private movePage(props: ExecuteBusinessComponentProps): void {
        if (isDefined(props.args)) {
            // preview mode일 경우 url변경
            // props로 받은 대상 page의 ID를 조합하여 URL을 생성함.
            const appName = window.location.hash.split('/')[1];
            const setURL = makePageURL({
                appName,
                mainPageID: props.args,
            });
            // 생성한 URL로 변경
            window.location.href = setURL;
        }
    }

    /**
     * 페이지 내부 이동 Logic
     *
     * @param props Execute props
     * @param ctx appContext
     */
    private moveInnerPage(props: ExecuteBusinessComponentProps): void {
        if (isDefined(props.args)) {
            // preview mode일 경우 url 변경
            // props로 받은 대상 innerpage의 ID를 조합하여 URL을 생성함.
            const appName = window.location.hash.split('/')[1];
            const mainPageID = String(QueryString.parse(window.location.href).mainPageID); // 현재 mainPageID 파싱.
            const setURL = makePageURL({
                appName,
                mainPageID,
                innerPageID: props.args,
            });
            window.location.href = setURL;
        }
    }

    /**
     * pageModel을 가지고 Dialog Open Logic
     *
     * @param props Execute props
     * @param ctx appContext
     */
    private showDialog(props: ExecuteBusinessComponentProps, uiStore: UIStore): void {
        if (isDefined(props.args)) {
            const pageModelID = Number(props.args);
            if (isDefined(pageModelID)) {
                uiStore.setDialogOpenProperty(true);
                uiStore.setDialogPageModelID(pageModelID);
            }
        }
    }

    /**
     * Dialog 닫기 Logic
     *
     * @param ctx appContext
     */
    private closeDialog(uiStore: UIStore): void {
        uiStore.setDialogOpenProperty(false);
    }
}
export default BusinessComponentLayoutClientService;
