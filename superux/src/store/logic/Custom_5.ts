import BusinessPresetManager from "model/business/BusinessPresetManager";
import { SyntheticEvent } from "react";
import API from "repository/API";
import DataStore from "store/app/DataStore";
import UIStore from "store/app/UIStore";
import { Custom_6 } from "./Custom_6";

export function Custom_5(manager: BusinessPresetManager, dataStore: DataStore, uiStore: UIStore, args?: any) {
    const argsArray = Array.from(args);
    const id = Number(((argsArray[0] as SyntheticEvent).target as HTMLImageElement).className);
    const serviceUrl = `/todos/`+id.toString();
    API.delete(serviceUrl).then(response => {
        const map = dataStore.getArgumentData().get('todoDTOList')?.dataValue;
        map.delete(id);
        Custom_6(manager, dataStore, uiStore);
    });
}