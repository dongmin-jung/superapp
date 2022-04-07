import BusinessPresetManager from "model/business/BusinessPresetManager";
import { KeyboardEvent } from "react";
import API from "repository/API";
import DataStore from "store/app/DataStore";
import UIStore from "store/app/UIStore";
import { Custom_6 } from "./Custom_6";

export function Custom_3(manager: BusinessPresetManager, dataStore: DataStore, uiStore: UIStore, args?: any) {
    const argsArray = Array.from(args);
    if ((argsArray[0] as KeyboardEvent).key === "Enter") {        
        const status = 'Active';
        const item = args[0].target.value;
        const serviceUrl = `/todos`;
        API.post<{ status: String, item: String }>(serviceUrl, { status, item }).then(response => {
            const res: number = response.data;
            if (res > 0) {
                const map = dataStore.getArgumentData().get('todoDTOList')?.dataValue;
                map.set(res, { id: res, status, item });
                Custom_6(manager, dataStore, uiStore);
            }
        });
        args[0].target.value = '';
    }
}