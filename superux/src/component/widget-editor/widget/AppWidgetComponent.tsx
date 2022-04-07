import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Redirect, Route, Switch } from 'react-router-dom';

import styles from 'style/widget-editor/widget/App.scss';
import toastMessageStyles from 'style/widget-editor/widget/ToastMessage.scss';
import useStore from 'hook/util/useStore';
import { mainPageID } from 'component/page/pageComponentMap';
import { Custom_2 } from 'store/logic/Custom_2';

/**
 * AppWidgetComponent의 props.
 */
interface IProps {
    id: string;
}

/**
 * App 전체를 나타내는 component.
 */
const AppWidgetComponent: React.FC<IProps> = ({ id }: IProps) => {
    /**
     * AppWidgetComponent는 현재 RUNTIME_PREVIEW 모드에서만 렌더링 됨.
     * RUNTIME_PREVIEW 모드가 실행되면 EDIT 모드에서 마지막으로 작업중인 Page가 렌더링 됨.
     * RUNTIME_PREVIEW 모드에선 page의 id 정보를 path 값으로 가짐.
     * Route는 path로 전달받의 page id 정보를 기반으로 대상 페이지를 찾아 렌더링 함.
     */

    const { dataStore, uiStore, businessPresetManager } = useStore();
    useEffect(() => {
        Custom_2(businessPresetManager, dataStore, uiStore);
    });

    return (
        <div id={id} className={styles.app}>
            <div id="superux-toast" className={toastMessageStyles.closeToast} />
            <Switch>
                <Route exact path="/" render={() => <Redirect to={`/${id}`} />} />
                <Route exact path="/:myApp" render={() => (uiStore.getPageComponentMap()?.get(mainPageID))} />
                <Route
                    path="/:myApp/:pageID"
                    render={({ match }) => {
                        // PageComponentMap에서 pageID와 일치하는 컴포넌트 반환
                        return uiStore.getPageComponentMap()?.get(Number(match.params.pageID));
                    }}
                />
            </Switch>
        </div>
    );
};

export default observer(AppWidgetComponent);
