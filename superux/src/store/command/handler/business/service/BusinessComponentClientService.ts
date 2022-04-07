import UIStore from 'store/app/UIStore';
import DataStore from 'store/app/DataStore';
import { ExecuteBusinessComponentProps } from 'model/business/BusinessPresetManager';

/**
 * BusinessComponent의 클라이언트 서비스들을 카테고리화 시켜 넣어주기 위한 클래스 입니다.
 */
abstract class BusinessComponentClientService {
    /**
     * 비즈니스 로직이 많아 짐에 따라 각 카테고리별로 분리하기 위해 만듦
     */
    public abstract execute(
        props: ExecuteBusinessComponentProps,
        uiStore: UIStore,
        dataStore: DataStore
    ): void;
}

export default BusinessComponentClientService;
