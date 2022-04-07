import React, { CSSProperties } from 'react';
import { VariousEvent, WidgetContent } from 'model/widget/CommonWidgetProperties';
import { TextField } from '@material-ui/core';

/**
 * BasicTextBoxWidgetComponent의 props.
 */
interface IProps {
    id: string;
    properties: WidgetContent;
    widgetStyle: CSSProperties;
    event: VariousEvent;
}

/**
 * HTML native textbox를 표현하는 component.
 */
export const BasicTextBoxWidgetComponent: React.FC<IProps> = ({ id, properties, widgetStyle, event }: IProps) => {
    return (
        <TextField
            id={id}
            style={widgetStyle}
            autoComplete={properties.autoComplete}
            autoFocus={properties.autoFocus}
            color={properties.color}
            defaultValue={properties.defaultValue}
            disabled={properties.disabled}
            error={properties.error}
            fullWidth={properties.fullWidth}
            margin={properties.margin}
            maxRows={properties.maxRows}
            minRows={properties.minRows}
            multiline={properties.multiline}
            name={properties.name}
            onClick={event.onClick}
            onChange={event.onChange}
            placeholder={properties.placeholder}
            required={properties.required}
            rows={properties.rows}
            select={properties.select}
            size={properties.size}
            type={properties.type}
            value={properties.value}
            variant={properties.variant}
            onKeyPress={event.onKeyPress}
        />
    );
};

export default BasicTextBoxWidgetComponent;
