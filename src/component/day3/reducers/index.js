import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui';

// combineReducers는 Redux에서 제공하는 2개 이상의 여러 Reducer들을 합쳐주는 함수입니다.
const reducers = combineReducers({
    counter, ui
});

export default reducers;