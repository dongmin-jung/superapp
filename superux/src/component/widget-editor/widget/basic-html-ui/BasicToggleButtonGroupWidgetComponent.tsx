import React, { ReactNode, CSSProperties } from 'react';

import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
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
export const BasicToggleButtonGroupWidgetComponent: React.FC<IProps> = ({
    id,
    properties,
    widgetStyle,
    children,
    event,
}: IProps) => {
    return (
        <ToggleButtonGroup
            id={id}
            style={widgetStyle}
            color={properties.color}
            exclusive={properties.exclusive}
            orientation={properties.orientation}
            size={properties.size}
            value={properties.value}
            onChange={event.onGroupChange}
        >
            {children}
        </ToggleButtonGroup>
    );
};

export default BasicToggleButtonGroupWidgetComponent;
