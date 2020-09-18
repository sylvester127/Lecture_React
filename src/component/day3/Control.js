import React, { Component } from 'react';

function createWarning(funcName) {
    return () => console.warn(funcName + 'is not defined');
}

// 버튼 3개를 렌더링하는 컴포넌트입니다.
// 버튼1: 값 1씩 증가
// 버튼2: 값 1씩 감소
// 버튼3: 배경화면 생상 랜덤화
class Control extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>    
                <button onClick={this.props.onSubtract}>-</button>    
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>    
            </div>
        );
    }
}

// 함수를 제대로 받아오지 못한다면 함수가 정의되어 있지 않다라고 경고를 띄워줍니다.
Control.defualtProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor'),
}

export default Control;