import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch } from 'react-router-dom';
import AppWidgetComponent from 'component/widget-editor/widget/AppWidgetComponent';
import RootStore, { StoreProvider } from 'store/RootStore';
import UIStore from 'store/app/UIStore';
import DataStore from 'store/app/DataStore';
import pageComponentMap from 'component/page/pageComponentMap';
import 'style/Global.scss';

const root = document.querySelector<HTMLDivElement>('.root');
const uiStore = new UIStore();
const dataStore = new DataStore();
uiStore.setPageComponentMap(pageComponentMap);
const store = new RootStore(uiStore, dataStore);
render(
    <HashRouter>
        <Switch>
            <StoreProvider value={store}>
                <AppWidgetComponent id="0" />
            </StoreProvider>
        </Switch>
    </HashRouter>,
    root
);