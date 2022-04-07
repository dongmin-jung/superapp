import BusinessPresetManager from 'model/business/BusinessPresetManager';
import { createContext } from 'react';
import DataStore from 'store/app/DataStore';
import UIStore from 'store/app/UIStore';

class RootStore {
    uiStore: UIStore;

    dataStore: DataStore;

    businessPresetManager: BusinessPresetManager;

    /**
     * 생성자.
     */
    constructor(uiStore: UIStore, dataStore: DataStore) {
        this.uiStore = uiStore;
        this.dataStore = dataStore;
        this.businessPresetManager = new BusinessPresetManager(this.uiStore, this.dataStore);
    }
}

/**
 * RootStore의 값을 component들에게 뿌려주는 context.
 */
 export const StoreContext = createContext<RootStore>({} as RootStore);

 /**
  * StoreContext의 provider component.
  * (Store의 값을 뿌릴 범위의 최상위 component(ex. <AppComponent/>)를 이걸로 감싸면 됨.)
  */
 export const StoreProvider = StoreContext.Provider;
 
 export default RootStore;
 