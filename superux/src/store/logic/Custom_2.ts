import { ObservableMap } from "mobx";
import BusinessPresetManager from "model/business/BusinessPresetManager";
import { number } from "prop-types";
import API from "repository/API";
import DataStore from "store/app/DataStore";
import UIStore from "store/app/UIStore";
import { Custom_6 } from "./Custom_6";

export function Custom_2(manager: BusinessPresetManager, dataStore: DataStore, uiStore: UIStore, args?: any) {
    async function getAllToDoList(): Promise<any> {
        const serviceUrl = `/todos`;
        const response = await API.get(serviceUrl);
        return response.data;
    }
    async function makeData(): Promise<void> {
        const datas = await getAllToDoList();
        const newMap = new Map<number, any>();
        datas.forEach((data: {id: number, status: String, item: String}) => {
            newMap.set(data.id, data);
        });
        dataStore.getArgumentData().set('todoDTOList', { dataValue: newMap });
        Custom_6(manager, dataStore, uiStore);
    }
    makeData();
}