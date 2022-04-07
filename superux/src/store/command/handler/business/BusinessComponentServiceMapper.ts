import { BusinessLogicEnum } from 'model/business/BusinessPresetManager';
import BusinessComponentServiceFactory from 'store/command/handler/business/BusinessComponentServiceFactory';
import BusinessComponentClientService from 'store/command/handler/business/service/BusinessComponentClientService';

/**
 * BusinessLogicEnum 별 매핑되는 BusinessComponentService를 관리하는 map
 */
type BusinessLogicServiceType = Map<BusinessLogicEnum, BusinessComponentClientService[]>;

/**
 * CommandMapper 는 command ID 에 따라 어떤 command handler 들이 동작하는지를 정의한 class 입니다.
 */
class BusinessComponentServiceMapper {
    /**
     * BusinessLogicEnum 별 매핑되는 BusinessComponentClient 서비스를 관리하는 map
     */
    protected readonly businessLogicServiceMap: BusinessLogicServiceType;

    /**
     * BusinessComponentServiceMapper는 BCLogicID 에 따라 어떤 BC Service들이 불리는지를 정의한 class 입니다.
     * BusinessManager 가 BC Logic ID 를 받으면
     *  BC Service mapper 에서 BC service list 를 받을 수 있습니다.
     */
    public constructor(factory: BusinessComponentServiceFactory) {
        this.businessLogicServiceMap = new Map();
        this.setBusinessLogicBasicClientServiceCommandMap(factory);
        this.setBusinessLogicLayoutClientServiceCommandMap(factory);
        this.setBusinessLogicAPIClientServiceCommandMap(factory);
        this.setBusinessLogicCustomClientServiceCommandMap(factory);
        this.setBusinessLogicUtilClientServiceCommandMap(factory);
    }

    /**
     * BusinessLogicBasicClientServiceCommandMap
     */
    private setBusinessLogicBasicClientServiceCommandMap(factory: BusinessComponentServiceFactory): void {
        const businessComponentBasicClientService = factory.createBusinessComponentBasicService();
        this.businessLogicServiceMap.set(BusinessLogicEnum.SHOW_ALERT, [businessComponentBasicClientService]);
        this.businessLogicServiceMap.set(BusinessLogicEnum.SHOW_CONFIRM, [businessComponentBasicClientService]);
        this.businessLogicServiceMap.set(BusinessLogicEnum.SHOW_TOAST, [businessComponentBasicClientService]);
        this.businessLogicServiceMap.set(BusinessLogicEnum.CLOSE_APP, [businessComponentBasicClientService]);
        this.businessLogicServiceMap.set(BusinessLogicEnum.OPEN_URL, [businessComponentBasicClientService]);
    }

    /**
     * BusinessLogicLayoutClientServiceCommandMap
     */
    private setBusinessLogicLayoutClientServiceCommandMap(factory: BusinessComponentServiceFactory): void {
        const businessComponentLayoutClientService = factory.createBusinessComponentLayoutClientService();
        this.businessLogicServiceMap.set(BusinessLogicEnum.MOVE_PAGE, [businessComponentLayoutClientService]);
        this.businessLogicServiceMap.set(BusinessLogicEnum.MOVE_INNER_PAGE, [businessComponentLayoutClientService]);
        this.businessLogicServiceMap.set(BusinessLogicEnum.SHOW_DIALOG, [businessComponentLayoutClientService]);
        this.businessLogicServiceMap.set(BusinessLogicEnum.CLOSE_DIALOG, [businessComponentLayoutClientService]);
    }

    /**
     * BusinessLogicAPIClientServiceCommandMap
     */
    private setBusinessLogicAPIClientServiceCommandMap(factory: BusinessComponentServiceFactory): void {
        const businessComponentAPIClientService = factory.createBusinessComponentAPIClientService();
        this.businessLogicServiceMap.set(BusinessLogicEnum.WEATHER, [businessComponentAPIClientService]);
        this.businessLogicServiceMap.set(BusinessLogicEnum.SHOW_GPS, [businessComponentAPIClientService]);
        this.businessLogicServiceMap.set(BusinessLogicEnum.CALL, [businessComponentAPIClientService]);
    }

    /**
     * BusinessLogicCustomClientServiceCommandMap
     */
    private setBusinessLogicCustomClientServiceCommandMap(factory: BusinessComponentServiceFactory): void {
        const businessComponentCustomClientService = factory.createBusinessComponentCustomClientService();
        this.businessLogicServiceMap.set(BusinessLogicEnum.CUSTOM, [businessComponentCustomClientService]);
    }

    /**
     * BusinessLogicUtilClientServiceCommandMap
     */
    private setBusinessLogicUtilClientServiceCommandMap(factory: BusinessComponentServiceFactory): void {
        const businessComponentUtilClientService = factory.createBusinessComponentUtilClientService();
        this.businessLogicServiceMap.set(BusinessLogicEnum.SET_VALUE, [businessComponentUtilClientService]);
    }

    /**
     * get service on BusinessLogic service Map
     */
    public get(commandID: BusinessLogicEnum): BusinessComponentClientService[] | undefined {
        return this.businessLogicServiceMap.get(commandID);
    }
}

export default BusinessComponentServiceMapper;
