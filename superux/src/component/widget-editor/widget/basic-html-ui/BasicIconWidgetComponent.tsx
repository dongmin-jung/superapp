import { VariousEvent, WidgetContent } from 'model/widget/CommonWidgetProperties';
import React, { CSSProperties } from 'react';


/**
 * BasicIconWidgetComponent의 props.
 */
interface IProps {
    id: string;
    properties: WidgetContent;
    widgetStyle: CSSProperties;
    event: VariousEvent;
}

/**
 * Icon를 표현하는 component.
 */
export const BasicIconWidgetComponent: React.FC<IProps> = ({ id, properties, widgetStyle, event }: IProps) => {
    return (
        <img
            id={id}
            className={properties.className}
            alt={properties.alt !== '' ? properties.alt : 'description'}
            src={properties.src !== '' ? properties.src : 'icon/icon_close.svg'}
            style={widgetStyle}
            onClick={event.onClick}
        />
    );
};

export default BasicIconWidgetComponent;
