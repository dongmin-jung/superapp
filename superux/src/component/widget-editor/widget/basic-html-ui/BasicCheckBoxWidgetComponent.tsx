import React, { CSSProperties } from 'react';

import { VariousEvent, WidgetContent } from 'model/widget/CommonWidgetProperties';
import { Checkbox } from '@material-ui/core';

/**
 * BasicCheckBoxWidgetComponent의 props.
 */
interface IProps {
    id: string;
    properties: WidgetContent;
    widgetStyle: CSSProperties;
    event: VariousEvent;
}

/**
 * HTML native checkbox를 표현하는 component.
 */
export const BasicCheckBoxWidgetComponent: React.FC<IProps> = ({ id, properties, widgetStyle, event }: IProps) => {
    return (
        <Checkbox
            checked={properties.checked}
            color={properties.color}
            defaultChecked={properties.defaultChecked}
            disabled={properties.disabled}
            disableRipple={properties.disableRipple}
            id={id}
            indeterminate={properties.indeterminate}
            onChange={event.onChange}
            required={properties.required}
            size={properties.size}
            value={properties.value}
        />
    );
};

export default BasicCheckBoxWidgetComponent;
