import BusinessPresetManager from "model/business/BusinessPresetManager";
import { SyntheticEvent } from "react";
import API from "repository/API";
import DataStore from "store/app/DataStore";
import UIStore from "store/app/UIStore";
import { Custom_6 } from "./Custom_6";

export function Custom_4(manager: BusinessPresetManager, dataStore: DataStore, uiStore: UIStore, args?: any) {
    const argsArray = Array.from(args);
    const id = Number(((argsArray[0] as SyntheticEvent).target as HTMLInputElement).value);
    const status = argsArray[1] ? 'Done' : 'Active';
    const map = dataStore.getArgumentData().get('todoDTOList')?.dataValue;
    const item = map.get(id).item;
    const serviceUrl = `/todos`;
    API.put<{ id: Number, status: String, item: String }>(serviceUrl, { id, status, item }).then(response => {
        map.get(id).status = status;
        Custom_6(manager, dataStore, uiStore);
    });
}