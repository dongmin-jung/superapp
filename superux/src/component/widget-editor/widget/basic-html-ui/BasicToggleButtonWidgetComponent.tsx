import React, { ReactNode, CSSProperties } from 'react';

import { ToggleButton } from '@material-ui/lab';
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
export const BasicToggleButtonWidgetComponent: React.FC<IProps> = ({
    id,
    properties,
    widgetStyle,
}: IProps) => {
    return (
        <ToggleButton
            id={id}
            style={widgetStyle}
            value={properties.value}
            color={properties.color}
            disabled={properties.disabled}
            disableFocusRipple={properties.disableFocusRipple}
            disableRipple={properties.disableRipple}
            selected={properties.selected}
            size={properties.size}
        >
            {properties.text}
        </ToggleButton>
    );
};

export default BasicToggleButtonWidgetComponent;
