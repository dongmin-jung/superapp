/**
 * @file HTML native widget의 속성들을 정의하는 파일입니다.
 */

import { IWidgetCommonProperties } from 'model/widget/CommonWidgetProperties';

export const basicWidgetTypeNames = [
    'BasicButton',
    'BasicLabel',
    'BasicParagraph',
    'BasicTextBox',
    'BasicCheckBox',
    'BasicColor',
    'BasicDate',
    'BasicDivision',
    'BasicImage',
    'BasicVideo',
    'BasicOnlineImage',
    'BasicOnlineVideo',
    'BasicRadioButton',
    'BasicIframe',
    'BasicMap',
    'BasicSwitch',
    'BasicPassword',
    'BasicDropdown',
    'BasicSlider',
    'BasicTimePicker',
    'BasicProgressBar',
    'BasicIcon',
    'BasicImageGallery',
] as const;

/**
 * Basic widget(= HTML native widget)의 종류 = 'Button' | 'Label' | ...
 */
export type BasicWidgetType = typeof basicWidgetTypeNames[number];

// 아래의 basicEditableWidgetTypeNames 등등: basicWidgetTypeNames와 별개이므로 basicWidgetTypeNames에 있어도 중복해서 적어야 함.

/**
 * 편집 영역에서 텍스트 수정이 가능한 것들의 모음.
 */
export const basicEditableWidgetTypeNames = new Set(['BasicButton', 'BasicLabel', 'BasicParagraph', 'BasicTextBox']);

/**
 * 자식을 가질 수 있는 것들의 모음.
 */
export const basicChildableWidgetTypeNames = new Set(['']);

/**
 * Basic widget의 공통적인 속성들.
 */
export type IBasicWidgetCommonProperties = IWidgetCommonProperties;

/**
 * Basic type 의 Widget 이 가질 수 있는 모든 Properties
 */
export type IBasicWidgetProperties = IWidgetCommonProperties & {
    content: {
        autocomplete?: string;
        dirname?: string;
        disabled?: boolean;
        form?: string;
        formaction?: string;
        formenctype?: string;
        formmethod?: string;
        formnovalidate?: boolean;
        formtarget?: string;
        id?: string;
        max?: string | number;
        maxlength?: number;
        min?: string | number;
        minlength?: number;
        multiple?: boolean;
        name?: string;
        placeholder?: string;
        readonly?: boolean;
        required?: boolean;
        size?: number;
        value?: string;
        autofocus?: boolean;
        type?: string;
        // TODO: checked와 defaultChecked가 공존할 순 없음
        // 하지만 각각이 존재해야할 의미는 있음
        // checked: 외부 변수로 인해 checked 여부가 바뀌어야 할때
        // defaultChecked: checked 여부는 브라우저동작으로 맡기고 단순히 초기값을 셋팅할때
        // 일단 툴페인에는 checked로 보여주지만 코드상으로는 defaultChecked 역할을 하도록 구현
        checked?: boolean;
        // defaultChecked?: boolean;
        alt?: string;
        src?: string;
        width?: number;
        height?: number;
        htmlFor?: string;
        text?: string;
        menuItemValues?: string;
        accept?: string;
        accesskey?: string;
        allow?: string;
        allowfullscreen?: string;
        allowpaymentrequest?: string;
        autoplay?: string;
        class?: string;
        contenteditable?: string;
        controls?: string;
        crossorigin?: string;
        // FIXME inyong_hwang: 아래 속성은 논의가 필요함
        // data*?: string;
        dir?: string;
        draggable?: string;
        for?: string;
        ismap?: string;
        lang?: string;
        list?: string;
        loading?: string;
        longdesc?: string;
        loop?: string;
        muted?: string;
        pattern?: string;
        poster?: string;
        preload?: string;
        referrerpolicy?: string;
        sandbox?: string;
        sizes?: string;
        spellcheck?: string;
        srcdoc?: string;
        srcset?: string;
        step?: string;
        style?: string;
        tabindex?: string;
        title?: string;
        translate?: string;
        usemap?: string;
    };
};
