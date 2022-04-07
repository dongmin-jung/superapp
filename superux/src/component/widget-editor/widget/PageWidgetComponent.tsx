import React, { ReactNode, CSSProperties, useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';

import styles from 'style/widget-editor/widget/Page.scss';
import { WidgetContent } from 'model/widget/CommonWidgetProperties';

/**
 * PageWidgetComponent의 props.
 */
interface IProps {
    id: string;
    properties: WidgetContent;
    widgetStyle: CSSProperties;
    children: ReactNode;
}

/**
 * 하나의 page를 나타내는 component.
 */
const PageWidgetComponent: React.FC<IProps> = ({
    id,
    properties,
    widgetStyle,
    children,
}: IProps) => {
    let pageStyle: CSSProperties;
    pageStyle = {
        ...widgetStyle,
        position: 'relative',
        display: 'inline-block',
        margin: 'auto',
    };

    return (
        <div
            id={id}
            className={styles.page}
            style={pageStyle}
        >
            {children}
        </div>
    );
};

export default observer(PageWidgetComponent);
