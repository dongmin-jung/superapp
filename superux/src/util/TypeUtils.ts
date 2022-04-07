/* eslint-disable @typescript-eslint/ban-types */
// Function 등의 자료형 사용 때문에 이 파일 한정으로 ban-types 옵션 끔.

/**
 * 어떤 값이 T 자료형의 값이거나 존재하지 않음을 표시하는 자료형.
 */
export type Nullable<T> = T | undefined;

/**
 * Nullable<T> -> T로 되돌림.
 *
 * @example
 * type A = Nullable<string>; // string | undefined.
 * type B = NonNullable<A>; // string.
 */
export type NonNullable<T> = Exclude<T, undefined>;

// ===========================================================
// 아래 부분은 ts-essentials 라이브러리에서 추출했습니다.
// https://github.com/krzkaczor/ts-essentials

/**
 * JS 원시 자료형.
 */
type Primitive = string | number | boolean | bigint | symbol | undefined | null;

/**
 * JS에서 제공하는 임의의 자료형.
 */
type Builtin = Primitive | Function | Date | Error | RegExp;

/**
 * T가 any인지 판단.
 */
type IsAny<T> = 0 extends 1 & T ? true : false;

/**
 * T가 unknown인지 판단.
 */
type IsUnknown<T> = IsAny<T> extends true ? false : unknown extends T ? true : false;

/**
 * 객체를 재귀적으로 Readonly로 바꿉니다.
 * - Readonly<>를 사용했을 경우 깊이 위치한 속성은 여전히 수정이 가능하지만(ex. data.x.y.z = 3),
 *   DeepReadonly<>는 그것도 방지해줍니다.
 * - 컴파일 오류 메시지가 복잡해질 수 있으니 **꼭 필요한 곳에만** 사용하세요.
 */
export type DeepReadonly<T> = T extends Builtin
    ? T
    : T extends Map<infer K, infer V>
    ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
    : T extends ReadonlyMap<infer K, infer V>
    ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
    : T extends WeakMap<infer K, infer V>
    ? WeakMap<DeepReadonly<K>, DeepReadonly<V>>
    : T extends Set<infer U>
    ? ReadonlySet<DeepReadonly<U>>
    : T extends ReadonlySet<infer U>
    ? ReadonlySet<DeepReadonly<U>>
    : T extends WeakSet<infer U>
    ? WeakSet<DeepReadonly<U>>
    : T extends Promise<infer U>
    ? Promise<DeepReadonly<U>>
    : T extends {}
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : IsUnknown<T> extends true
    ? unknown
    : Readonly<T>;

/**
 * 주어진 값이 **undefined가 아닌 값인지** 체크합니다.
 * - if문 등에 사용할 경우, 컴파일러가 해당 스코프 안에서는 주어진 값을 함수의 결과값에 따라 좁혀진 자료형으로 인식합니다.
 *   ex. number | undefined -> 이 함수의 결과값이 true이면 number로, false면 undefined로 인식.
 * - 반대: isUndefined()
 *
 * @example
 * ```typescript
 * function foo(x: number | undefined) {
 *     if (isDefined(x)) {
 *         // 여기서는 x: number.
 *     } else {
 *         // 여기서는 x: undefined.
 *     }
 * }
 * ```
 */
export function isDefined<T>(value: T): value is Exclude<T, undefined> {
    return typeof value !== 'undefined';
}

/**
 * 주어진 값이 **undefined인지** 체크합니다.
 * - if문 등에 사용할 경우, 컴파일러가 해당 스코프 안에서는 주어진 값을 undefined로 인식합니다.
 *   ex. number | undefined -> 이 함수의 결과값이 true이면 undefined로, false면 number로 인식.
 * - 반대: isDefined()
 *
 * @example
 * ```typescript
 * function foo(x: number | undefined) {
 *     if (isUndefined(x)) {
 *         // 여기서는 x: undefined.
 *     } else {
 *         // 여기서는 x: number.
 *     }
 * }
 */
export function isUndefined<T>(value: T | undefined): value is undefined {
    return typeof value === 'undefined';
}

/**
 * 주어진 값이 **null이 아닌 값인지** 체크합니다.
 * - if문 등에 사용할 경우, 컴파일러가 해당 스코프 안에서는 주어진 값을 함수의 결과값에 따라 좁혀진 자료형으로 인식합니다.
 *   ex. number | null -> 이 함수의 결과값이 true이면 number로, false면 null로 인식.
 * - 반대: isNull()
 *
 * @example
 * ```typescript
 * function foo(x: number | null) {
 *     if (isNotNull(x)) {
 *         // 여기서는 x: number.
 *     } else {
 *         // 여기서는 x: null.
 *     }
 * }
 * ```
 */
export function isNotNull<T>(value: T): value is Exclude<T, null> {
    return value !== null;
}
/**
 * 주어진 값이 **null인지** 체크합니다.
 * - if문 등에 사용할 경우, 컴파일러가 해당 스코프 안에서는 주어진 값을 함수의 결과값에 따라 좁혀진 자료형으로 인식합니다.
 *   ex. number | null -> 이 함수의 결과값이 true이면 null로, false면 number로 인식.
 * - 반대: isNotNull()
 *
 * @example
 * ```typescript
 * function foo(x: number | null) {
 *     if (isNull(x)) {
 *         // 여기서는 x: null.
 *     } else {
 *         // 여기서는 x: number.
 *     }
 * }
 * ```
 */
export function isNull<T>(value: T | null): value is null {
    return value === null;
}
