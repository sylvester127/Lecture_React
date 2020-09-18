import * as types from '../actions/ActionTypes';

const initialState = {
    color: [255, 255, 255]
};

export default function ui(state = initialState, action) {
    if(action.type === types.SET_COLOR) {
        // action에서 새로운 color를 가져와서 새 객체를 만들고 반환
        return {
            color: action.color
        };
    } else {
        return state;
    }
}