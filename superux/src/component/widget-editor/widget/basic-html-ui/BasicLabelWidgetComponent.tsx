import React, { CSSProperties, ReactNode } from 'react';

import { VariousEvent, WidgetContent } from 'model/widget/CommonWidgetProperties';
import { FormLabel } from '@material-ui/core';

/**
 * BasicLabelWidgetComponent의 props.
 */
interface IProps {
    id: string;
    properties: WidgetContent;
    widgetStyle: CSSProperties;
    children?: ReactNode;
    event: VariousEvent;
}

/**
 * HTML native label을 표현하는 component.
 */
export const BasicLabelWidgetComponent: React.FC<IProps> = ({
    id,
    properties,
    widgetStyle,
    children,
    event,
}: IProps) => {
    return (
        <FormLabel
            id={id}
            color={properties.color}
            disabled={properties.disabled}
            error={properties.error}
            filled={properties.filled}
            focused={properties.focused}
            required={properties.required}
            style={widgetStyle}
            onClick={event.onClick}
        >
            {properties.text}
            {children}
        </FormLabel>
    );
};

export default BasicLabelWidgetComponent;
