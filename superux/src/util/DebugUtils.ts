/* eslint-disable no-console, import/no-mutable-exports */
// no-console: console 함수들 때문에 off.
// no-mutable-exports: let을 export하는 것 때문에 off. (TypeScript 제한 상 let을 export해도 import 하는 쪽에서 수정 못하므로 off해도 안전함.)

/**
 * 로깅용 함수들을 나타내는 자료형입니다.
 */
type Logger = (...args: unknown[]) => void;

/**
 * 아무 것도 하지 않는 더미 함수입니다.
 * ex. dLog() 등의 함수들은 core의 모드가 배포 모드일 시 console.log 대신 이 함수가 됩니다.
 */
const pass: Logger = () => {
    // Do nothing.
};

/**
 * console.log 대용.
 * 개발 모드로 빌드될 때만 출력합니다.
 *
 * @param args console.log의 인수들과 동일
 */
export let dLog: Logger;

/**
 * console.warn 대용.
 * 개발 모드로 빌드될 때만 출력합니다.
 *
 * @param args console.warn의 인수들과 동일
 */
export let dWarn: Logger;

/**
 * console.error 대용.
 * 개발 모드로 빌드될 때만 출력합니다.
 *
 * @param args console.error의 인수들과 동일
 */
export let dError: Logger;

/**
 * office-core의 모드를 설정합니다.
 *
 * @param mode 모드의 종류.
 * @example
 * // App을 webpack 개발 모드로 빌드했으면 core의 모드를 Development로,
 * // 배포 모드로 빌드했으면 Production으로 설정.
 * if (process.env.NODE_ENV === 'development') {
 *     setCoreMode('Development');
 * } else {
 *     setCoreMode('Production');
 * }
 *
 * // 개발 모드로 빌드했을 때만 'Hello'가 출력됨.
 * dLog('Hello!);
 */
export function setCoreMode(mode: 'Development' | 'Production') {
    // office-core를 production mode로 빌드해서 source map 없이 배포하므로...
    // 만약 dLog 내부에 분기를 둬서 console.log / pass 중 하나를 호출하는 방식으로 하면
    // ex. function dLog(...) { if (mode === 'Development') { console.log(...); } }
    // 외부(ex. SuperUX)에서 source map을 활성화해도 console.log를 호출한 TypeScript 코드를 찾을 수가 없음.
    // 따라서 dLog를 console.log로 직접 할당하는 방식으로 해야 함.
    if (mode === 'Development') {
        dLog = console.log;
        dWarn = console.warn;
        dError = console.error;
    } else {
        dLog = pass;
        dWarn = pass;
        dError = pass;
    }
}

// 기본값: 개발 모드.
setCoreMode('Development');
