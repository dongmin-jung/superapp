import BusinessPresetManager from "model/business/BusinessPresetManager";
import DataStore from "store/app/DataStore";
import UIStore from "store/app/UIStore";
import { Custom_6 } from "./Custom_6";

export function Custom_1(manager: BusinessPresetManager, dataStore: DataStore, uiStore: UIStore, args?: any) {
    const argsArray = Array.from(args);
    dataStore.getArgumentData().set('state', { dataValue: argsArray[1] });
    Custom_6(manager, dataStore, uiStore);
}