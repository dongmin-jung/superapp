import { useContext } from 'react';
import { StoreContext } from 'store/RootStore';

/**
 * Component 안에서 store에 접근하기 위한 hook.
 *
 * @todo
 * 만약 메인 페이지 이외에도 복잡한 페이지가 생겨서 각 페이지마다 별도로 store를 구현하게 되면,
 * useStore()를 각 페이지용으로 만들거나 (ex. useMainPageStore()),
 * 또는 generic 등을 사용하여 context의 값을 해당 store로 끼우는 식으로 변경 예정.
 */
const useStore = () => useContext(StoreContext);

export default useStore;