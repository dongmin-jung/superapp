import React, { ReactNode, CSSProperties } from 'react';

import { Button } from '@material-ui/core';
import { VariousEvent, WidgetContent } from 'model/widget/CommonWidgetProperties';

/**
 * BasicButtonWidgetComponent의 props.
 */
interface IProps {
    id: string;
    properties: WidgetContent;
    widgetStyle: CSSProperties;
    children?: ReactNode;
    event: VariousEvent;
}

/**
 * Material UI Button을 표현하는 component.
 */
export const BasicButtonWidgetComponent: React.FC<IProps> = ({
    id,
    properties,
    widgetStyle,
    children,
    event,
}: IProps) => {
    return (
        <Button
            id={id}
            style={widgetStyle}
            // 기본속성
            color={properties.color}
            disabled={properties.disabled}
            disableElevation={properties.disableElevation}
            disableFocusRipple={properties.disableFocusRipple}
            disableRipple={properties.disableRipple}
            fullWidth={properties.fullWidth}
            href={properties.href}
            // size={content.size} 현재 슈퍼셋과 중복됨. type : "small" | "medium" | "large" ...
            variant={properties.variant}
            // 상세속성
            centerRipple={properties.centerRipple}
            disableTouchRipple={properties.disableTouchRipple}
            focusRipple={properties.focusRipple}
            focusVisibleClassName={properties.focusVisibleClassName}
            // 이벤트
            onClick={event.onClick}
        >
            {properties.text}
        </Button>
    );
};

export default BasicButtonWidgetComponent;
