/**
 * @file
 * 창의 URL 변경, 새 창 열기 등을 담당하는 모듈입니다.
 * 웹 환경일 경우 브라우저에게, Electron 환경일 경우 밑단(Node.js)에게 요청하여 창을 생성 & 조작합니다.
 */
import { isDefined } from "util/TypeUtils";

/**
 * 밑단(Node.js)과 주고받을 수 있는 메시지의 channel의 자료형입니다.
 */
type Channel = 'OpenNewWindow' | 'MinimizeCurrentWindow' | 'MaximizeCurrentWindow' | 'CloseCurrentWindow';

/**
 * Preload.js에서 제공하는 객체의 자료형.
 */
interface ElectronProps {
    sendMessage: (channel: Channel, ...args: unknown[]) => void;
}

/**
 * Electron 환경일 경우, Preload.js에서 정의한 객체가 됩니다.
 * 웹 환경일 경우 undefined가 됩니다.
 */
const { electron } = window as unknown as { electron: ElectronProps | undefined };

// 이게 true일 경우 코드 상에서 electron 객체도 undefined 아닌 자료형으로 자동으로 추론이 됩니다.
// 그런데 export const isRunningOnElectron 이렇게 쓰면 해당 기능이 작동하지 않아 일단 아래와 같이 씁니다.
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html
const isRunningOnElectron = isDefined(electron);
export { isRunningOnElectron };

// HashRouter를 사용할 경우 #/, BrowserRouter를 사용할 경우 /.
const urlPrefix = '#/';

/**
 * App 편집창을 열 때 필요한 정보들입니다.
 */
export interface AppProps {
    appName?: string;
    appID?: number;
    userID?: number;
    timestamp?: string;
    mainPageID?: string;
    innerPageID?: string;
}

/**
 * 새 창에서 landing page를 엽니다.
 */
export function openLandingPage() {
    if (isRunningOnElectron) {
        electron.sendMessage('OpenNewWindow', '');
    } else {
        window.open(`${urlPrefix}`, '_blank');
    }
}

/**
 * 페이지 이동을 위한 URL 생성. pageID를 조합하여 생성함.
 */
export function makePageURL(props: AppProps) {
    const { appName, appID, userID = 0, timestamp = 0, mainPageID, innerPageID } = props;

    const allPageIDs: Array<string | undefined> = [mainPageID, innerPageID];
    const pagesPath = allPageIDs
        .filter(id => isDefined(id) && id.length > 0)
        .map(id => `/${id}`)
        .join('');

    const url = `${urlPrefix}${appName}${pagesPath}`;

    return url;
}

/**
 * 현재 창을 최소화합니다.
 */
export function minimizeCurrentWindow() {
    if (isRunningOnElectron) {
        electron.sendMessage('MinimizeCurrentWindow');
    } else {
        alert('현재 환경에서는 최소화를 수행할 수 없습니다.');
    }
}

/**
 * 현재 창을 최대화합니다.
 * 창이 이미 최대화가 되어있으면 원래 크기로 복원합니다.
 */
export function maximizeCurrentWindow() {
    if (isRunningOnElectron) {
        electron.sendMessage('MaximizeCurrentWindow');
    } else {
        alert('현재 환경에서는 최대화를 수행할 수 없습니다.');
    }
}

/**
 * 현재 창을 닫습니다.
 */
export function closeCurrentWindow() {
    if (isRunningOnElectron) {
        electron.sendMessage('CloseCurrentWindow');
    } else {
        window.close();
    }
}
