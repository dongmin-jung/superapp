import BusinessPresetManager from "model/business/BusinessPresetManager";
import API from "repository/API";
import DataStore from "store/app/DataStore";
import UIStore from "store/app/UIStore";
import { Custom_6 } from "./Custom_6";

export function Custom_7(manager: BusinessPresetManager, dataStore: DataStore, uiStore: UIStore, args?: any) {
    const argsArray = Array.from(args);
    const todoDTOList = Array.from(dataStore.getArgumentData().get('todoDTOList')?.dataValue.values());
    let numb = 0;
    todoDTOList.forEach((data) => {
        const { id, item } = data as { id: number; item: string; };
        const status = argsArray[1] ? 'Done' : 'Active';
        const map = dataStore.getArgumentData().get('todoDTOList')?.dataValue;
        const serviceUrl = `/todos`;
        ((id, i) => {
            API.put<{ id: Number, status: String, item: String }>(serviceUrl, { id, status, item }).then(response => {
                numb = numb + 1;
                map.get(id).status = status;
                if (numb === i) Custom_6(manager, dataStore, uiStore);
            });
        })(id, todoDTOList.length);
    });
}