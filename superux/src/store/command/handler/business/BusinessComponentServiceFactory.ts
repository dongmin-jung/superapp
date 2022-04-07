import BusinessComponentAPIClientService from 'store/command/handler/business/service/BusinessComponentAPIClientService';
import BusinessComponentBasicClientService from 'store/command/handler/business/service/BusinessComponentBasicClientService';
import BusinessComponentClientService from 'store/command/handler/business/service/BusinessComponentClientService';
import BusinessComponentCustomClientService from 'store/command/handler/business/service/BusinessComponentCustomService';
import BusinessComponentLayoutClientService from 'store/command/handler/business/service/BusinessComponentLayoutClientService';
import BusinessComponentUtilClientService from 'store/command/handler/business/service/BusinessComponentUtilClientService';

/**
 * Business Service handler 를 생성하는 abstract factory 입니다.
 *
 */
class BusinessComponentServiceFactory {
    /**
     * BusinessComponentBasicClientService 반환
     */
    public createBusinessComponentBasicService(): BusinessComponentClientService {
        return new BusinessComponentBasicClientService();
    }

    /**
     * BusinessComponentLayoutClientService 반환
     */
    public createBusinessComponentLayoutClientService(): BusinessComponentClientService {
        return new BusinessComponentLayoutClientService();
    }

    /**
     * BusinessComponentAPIClientService 반환
     */
    public createBusinessComponentAPIClientService(): BusinessComponentClientService {
        return new BusinessComponentAPIClientService();
    }

    /**
     * BusinessComponentCustomClientService 반환
     */
    public createBusinessComponentCustomClientService(): BusinessComponentClientService {
        return new BusinessComponentCustomClientService();
    }

    /**
     * BusinessComponentUtilClientService 반환
     */
    public createBusinessComponentUtilClientService(): BusinessComponentClientService {
        return new BusinessComponentUtilClientService();
    }
}

export default BusinessComponentServiceFactory;
