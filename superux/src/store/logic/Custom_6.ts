import BusinessPresetManager from "model/business/BusinessPresetManager";
import DataStore from "store/app/DataStore";
import UIStore from "store/app/UIStore";

export function Custom_6(manager: BusinessPresetManager, dataStore: DataStore, uiStore: UIStore, args?: any) {
    const map = dataStore.getArgumentData().get('todoDTOList')?.dataValue;
    const array = Array.from(map.values());
    let i = 0;
    dataStore.getArgumentData().set('filteredData', {
        dataValue: array.filter((item) => {
            if ((item as { id: number; status: String; item: String }).status === 'Active') i = i + 1;
            if (dataStore.getArgumentData().get('state')?.dataValue === 'all') return true;
            if (dataStore.getArgumentData().get('state')?.dataValue === (item as { id: number; status: String; item: String }).status) return true;
            return false;
        })
    });
    dataStore.getArgumentData().set('left', { dataValue: i });
    if (i === 0 && array.length > 0) dataStore.getArgumentData().set('isChecked', { dataValue: true });
    else dataStore.getArgumentData().set('isChecked', { dataValue: false });
}