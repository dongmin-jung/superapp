import { action, observable, makeObservable } from 'mobx';
import { WidgetID } from 'model/widget/CommonWidgetProperties';

/**
 * UI Store
 */
class UIStore {

    @observable
    private dialogPageModelID: WidgetID | undefined;

    @observable
    private dialogOpenProperty: boolean;

    // key: pageID, value: component
    @observable
    private pageComponentMap: Map<number, JSX.Element> | undefined;

    /**
     * UI Store Constructor
     */
    constructor() {
        makeObservable(this);
        this.dialogPageModelID = undefined;
        this.dialogOpenProperty = false;
        this.pageComponentMap = undefined;
    }

    /**
     * UI Store init
     */
    init() {
        //
    }

    /**
     * getDialogPageModel
     *
     * @returns this.dialogPageModel
     */
    getDialogPageModelID(): WidgetID | undefined {
        return this.dialogPageModelID;
    }

    /**
     * return widget property map by widget id
     *
     * @returns this.dialogOpenProperty
     */
    getDialogOpenProperty(): boolean {
        return this.dialogOpenProperty;
    }

    /**
     * set dialogPageModel value
     */
    @action.bound
    setDialogPageModelID(dialogPageModelID: WidgetID): void {
        this.dialogPageModelID = dialogPageModelID;
    }

    /**
     * set DialogOpenProperty value
     */
    @action.bound
    setDialogOpenProperty(dialogOpenProperty: boolean): void {
        this.dialogOpenProperty = dialogOpenProperty;
    }

    /**
     * get PageComponentMap
     */
    getPageComponentMap() {
        return this.pageComponentMap;
    }

    /**
     * set PageComponentMap
     */
    setPageComponentMap(pageComponentMap: Map<number, JSX.Element>) {
        this.pageComponentMap = pageComponentMap;
    }
}

export default UIStore;
