import * as types from './ActionTypes';

// 액션 생성자
export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

// ES6표기법에 의해서 color: color와 같이 이름이 같다면 그냥 color만 동일하게 작동된다.
export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    };
}