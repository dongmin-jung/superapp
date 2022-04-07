import React, { CSSProperties, ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { VariousEvent, WidgetContent } from 'model/widget/CommonWidgetProperties';

/**
 * LayoutFrameWidgetComponent의 props
 */
interface IProps {
    id: string;
    properties: WidgetContent;
    widgetStyle: CSSProperties;
    children: ReactNode;
    event: VariousEvent;
}

/**
 * LayoutFrameWidgetComponent을 표현하는 component
 */
const LayoutHorizontalFrameComponent: React.FC<IProps> = ({ id, properties, widgetStyle, children, event }: IProps) => {
    return (
        <div
            id={id}
            className={properties.className}
            style={{
                ...widgetStyle,
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            {children}
        </div>
    );
};

export default observer(LayoutHorizontalFrameComponent);
