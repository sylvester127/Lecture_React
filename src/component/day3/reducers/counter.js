import * as types from '../actions/ActionTypes';

// Reducer의 초기 상태를 정의합니다.
// Counter 프로젝트에서는 number만 필요하지만, 
// 1. 여러 state가 존재할 때 
// 2. state가 객체로 있을 때
// 와 같은 상황을 예시로 하고자 dummy와 dumbObject를 추가했습니다.
const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3,
    }
};

// 함수가 처음 실행될 때, state값은 undefind이기 때문에 초기 상태를 정의해야합니다.
// action이 일어나면 어떤 식으로 state을 바꿀 것인지 설정합니다. 
export default function counter(state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT:
            return {
                // 여러개의 state가 존재할 때
                ...state, 
                number: state.number + 1, 
                // dumbObject u만 바꾸기
                dumbObject: {...state.dumbObject, u: 0} 
            };
        case types.DECREMENT:
            return {...state, number: state.number - 1};
        default:
            return state;
    }
}