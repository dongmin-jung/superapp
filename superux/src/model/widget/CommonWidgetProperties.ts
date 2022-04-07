/**
 * @file Widget의 공통적인 속성들 및 공통적으로 사용되는 자료형들을 정의하는 파일입니다.
 */

import { CSSProperties } from 'react';

/**
 * Widget의 id를 나타냅니다.
 * 추후에 id의 자료형이 변경될 시 공수를 적게 하기 위하여 정의했습니다.
 */
export type WidgetID = number;
/**
 * Widget의 Style요소. WidgetComponent의 render 시 CSS 생성에 사용됨
 * 주의) CSSProperties이 아님
 * e.g) width: 'auto'|'length'| ... (X), width: number (O)
 */
export type WidgetStyle = {
    // 속성 파싱 때 속성 key에 임의의 string을 넣을 수 있게 해주기 위함
    [key: string]: any;
    x: Length;
    y: Length;
    width: Length;
    height: Length;
    alignItems?: CSSProperties['alignItems'];
    alignSelf?: CSSProperties['alignSelf'];
    all?: CSSProperties['all'];
    animation?: string;
    animationDelay?: string;
    animationDirection?: string;
    animationDuration?: string;
    animationFillMode?: string;
    animationIterationCount?: string;
    animationName?: string;
    animationPlayState?: string;
    animationTimingFunction?: string;
    backfaceVisibility?: CSSProperties['backfaceVisibility'];
    background?: string;
    backgroundAttachment?: string;
    backgroundBlendMode?: string;
    backgroundClip?: string;
    backgroundColor?: Color;
    backgroundImage?: string;
    backgroundOrigin?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
    border?: string;
    borderBottom?: string;
    borderBottomColor?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
    borderBottomStyle?: CSSProperties['borderBottomStyle'];
    borderBottomWidth?: string;
    borderCollapse?: CSSProperties['borderCollapse'];
    borderColor?: string;
    borderImage?: string;
    borderImageOutset?: string;
    borderImageRepeat?: string;
    borderImageSlice?: string;
    borderImageSource?: string;
    borderImageWidth?: string;
    borderLeft?: string;
    borderLeftColor?: string;
    borderLeftStyle?: CSSProperties['borderLeftStyle'];
    borderLeftWidth?: string;
    borderRadius?: string;
    borderRight?: string;
    borderRightColor?: string;
    borderRightStyle?: CSSProperties['borderRightStyle'];
    borderRightWidth?: string;
    borderSpacing?: string;
    borderStyle?: string;
    borderTop?: string;
    borderTopColor?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderTopStyle?: CSSProperties['borderTopStyle'];
    borderTopWidth?: string;
    borderWidth?: string;
    bottom?: string;
    boxDecorationBreak?: CSSProperties['boxDecorationBreak'];
    boxShadow?: string;
    boxSizing?: CSSProperties['boxSizing'];
    breakAfter?: CSSProperties['breakAfter'];
    breakBefore?: CSSProperties['breakBefore'];
    breakInside?: CSSProperties['breakInside'];
    captionSide?: CSSProperties['captionSide'];
    caretColor?: string;
    clear?: CSSProperties['clear'];
    clip?: string;
    color?: string;
    columnCount?: CSSProperties['columnCount'];
    columnFill?: CSSProperties['columnFill'];
    columnGap?: string;
    columnRule?: string;
    columnRuleColor?: string;
    columnRuleStyle?: string;
    columnRuleWidth?: string;
    columnSpan?: CSSProperties['columnSpan'];
    columnWidth?: string;
    columns?: string;
    content?: string;
    counterIncrement?: string;
    counterReset?: string;
    cursor?: string;
    direction?: CSSProperties['direction'];
    display?: CSSProperties['display'];
    emptyCells?: CSSProperties['emptyCells'];
    filter?: string;
    flex?: string;
    flexBasis?: CSSProperties['flexBasis'];
    flexDirection?: CSSProperties['flexDirection'];
    flexFlow?: string;
    flexGrow?: number;
    flexShrink?: number;
    flexWrap?: CSSProperties['flexWrap'];
    float?: CSSProperties['float'];
    font?: string;
    fontFamily?: string;
    fontFeatureSettings?: string;
    fontKerning?: CSSProperties['fontKerning'];
    fontLanguageOverride?: string;
    fontSize?: string;
    fontSizeAdjust?: number | 'none';
    fontStretch?: string;
    fontStyle?: string;
    fontSynthesis?: string;
    fontVariant?: string;
    fontVariantAlternates?: string;
    fontVariantCaps?: CSSProperties['fontVariantCaps'];
    fontVariantEastAsian?: string;
    fontVariantLigatures?: string;
    fontVariantNumeric?: string;
    fontVariantPosition?: CSSProperties['fontVariantPosition'];
    fontWeight?: CSSProperties['fontWeight'];
    gap?: string;
    grid?: string;
    gridArea?: string;
    gridAutoColumns?: string;
    gridAutoFlow?: string;
    gridAutoRows?: string;
    gridColumn?: string;
    gridColumnEnd?: string;
    gridColumnGap?: string;
    gridColumnStart?: string;
    gridGap?: string;
    gridRow?: string;
    gridRowEnd?: string;
    gridRowGap?: string;
    gridRowStart?: string;
    gridTemplate?: string;
    gridTemplateAreas?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    hangingPunctuation?: string;
    // height?: string;
    hyphens?: CSSProperties['hyphens'];
    imageRendering?: CSSProperties['imageRendering'];
    isolation?: CSSProperties['isolation'];
    // left?: string;
    letterSpacing?: string;
    lineBreak?: CSSProperties['lineBreak'];
    lineHeight?: string;
    listStyle?: string;
    listStyleImage?: string;
    listStylePosition?: CSSProperties['listStylePosition'];
    listStyleType?: string;
    margin?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    mask?: string;
    maskClip?: string;
    maskComposite?: string;
    maskImage?: string;
    maskMode?: string;
    maskOrigin?: string;
    maskPosition?: string;
    maskRepeat?: string;
    maskSize?: string;
    maskType?: CSSProperties['maskType'];
    maxHeight?: string;
    maxWidth?: string;
    minHeight?: number;
    minWidth?: number;
    mixBlendMode?: CSSProperties['mixBlendMode'];
    objectFit?: CSSProperties['objectFit'];
    objectPosition?: string;
    opacity?: string;
    order?: number;
    orphans?: number;
    outline?: string;
    outlineColor?: string;
    outlineOffset?: string;
    outlineStyle?: string;
    outlineWidth?: string;
    overflowWrap?: CSSProperties['overflowWrap'];
    overflowX?: CSSProperties['overflowX'];
    overflowY?: CSSProperties['overflowY'];
    padding?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    pageBreakAfter?: CSSProperties['pageBreakAfter'];
    pageBreakBefore?: CSSProperties['pageBreakBefore'];
    pageBreakInside?: CSSProperties['pageBreakInside'];
    perspective?: string;
    perspectiveOrigin?: string;
    pointerEvents?: CSSProperties['pointerEvents'];
    position?: CSSProperties['position'];
    quotes?: string;
    resize?: CSSProperties['resize'];
    right?: string;
    rowGap?: string;
    scrollBehavior?: CSSProperties['scrollBehavior'];
    tabSize?: string;
    tableLayout?: CSSProperties['tableLayout'];
    textAlign?: CSSProperties['textAlign'];
    textAlignLast?: CSSProperties['textAlignLast'];
    textCombineUpright?: string;
    textDecoration?: string;
    textDecorationColor?: string;
    textDecorationLine?: string;
    textDecorationStyle?: CSSProperties['textDecorationStyle'];
    textIndent?: string;
    textJustify?: CSSProperties['textJustify'];
    textOrientation?: CSSProperties['textOrientation'];
    textOverflow?: string;
    textShadow?: string;
    textTransform?: CSSProperties['textTransform'];
    textUnderlinePosition?: string;
    // top?: string;
    transform?: string;
    transformOrigin?: string;
    transformStyle?: CSSProperties['transformStyle'];
    transition?: string;
    transitionDelay?: string;
    transitionDuration?: string;
    transitionProperty?: string;
    transitionTimingFunction?: string;
    unicodeBidi?: CSSProperties['unicodeBidi'];
    userSelect?: CSSProperties['userSelect'];
    verticalAlign?: string;
    visibility?: CSSProperties['visibility'];
    whiteSpace?: CSSProperties['whiteSpace'];
    widows?: CSSProperties['widows'];
    // width?: string;
    wordBreak?: CSSProperties['wordBreak'];
    wordSpacing?: string;
    wordWrap?: CSSProperties['wordWrap'];
    writingMode?: CSSProperties['writingMode'];
    zIndex?: CSSProperties['zIndex'];
};

/**
 * Absolute & Relatvie Length type for style properties
 */
export type Length = {
    absolute: number;
    relative: number;
    unit: string; // "px" | "%"
};

/**
 * Color type for background
 */
export type Color = string;

/**
 * LayoutContainer에서 위젯이 서로 실제 랜더된 크기가 바뀌거나할때, 실제로
 * model의 정보가 아닌 실제 랜더된 정보
 */
export type RenderedWidgetInfo = {
    renderedX: number;
    renderedY: number;
    renderedWidth: number;
    renderedHeight: number;
};

/**
 * Widget의 Content 요소.
 * 사용자가 수정 가능하도록 제공할 요소들임
 */
export type WidgetContent = {
    // 속성 파싱 때 속성 key에 임의의 string을 넣을 수 있게 해주기 위함
    [key: string]: any;
    className: string;
};

/**
 * 임의의 마우스 이벤트.
 */
export interface VariousEvent {
    onClick?: React.MouseEventHandler<HTMLElement>;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onGroupChange?: (event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void;
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
}

/**
 * Widget의 Color가 Theme 속성인지 Standard 속성인지 CUSTOM 속성인지
 * CUSTOM 속성은 사용자 지정색으로 RightToolPane에서 해당 Widget의 style 속성 중 backgroundColor를 적용했을 때 반영됨.
 */
export type ColorType = 'STANDARD' | 'THEME' | 'CUSTOM';

/**
 * Widget들의 공통적인 속성들.
 */
export interface IWidgetCommonProperties {
    style: WidgetStyle;
    content: WidgetContent;
    themeInfo: {
        colorType: ColorType;
        paletteIndex: number;
    };
    rendered?: RenderedWidgetInfo;
    selected: boolean;
    editingText?: string;
    locked: boolean;
    dragHovered: boolean;
}
