import React, { CSSProperties, ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

import styles from 'style/widget-editor/widget/layout/RepeatableLayout.scss';
import { VariousEvent, WidgetContent } from 'model/widget/CommonWidgetProperties';
import { isDefined } from 'util/TypeUtils';

/**
 * RepeatableLayoutComponent props.
 */
interface IProps {
    id: string;
    properties: WidgetContent;
    widgetStyle: CSSProperties;
    children: ReactNode;
    event: VariousEvent;
}

/**
 * 자식을 주어진 횟수만큼 반복해서 렌더하는 component.
 */
const RepeatableLayoutComponent: React.FC<IProps> = ({ id, properties, widgetStyle, children, event }: IProps) => {
    const childrens: Array<ReactNode> = [];

    if (isDefined(properties.length)) {
        for (let index = 0; index < properties.length; index++) {
            childrens.push(children);
        }
    }
    if (isDefined(properties.data)) {
        for (let index = 0; index < properties.data.length; index++) {
            childrens.push(properties.onRender(properties.data[index]));
        }
    }

    return (
        <div
            id={id}
            className={classNames(properties.className, styles.repeatableLayout)}
            style={widgetStyle}
        >
            {childrens}
        </div>
    );
};

export default observer(RepeatableLayoutComponent);
