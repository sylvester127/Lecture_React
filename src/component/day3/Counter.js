import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';
import {connect, bindActionCreators} from 'react-redux';
import * as actions from '../day3/actions';

// Value와 Control 컴포넌트를 담는 부모 컴포넌트입니다.
// Redux와 연관되어 있으며 데이터를 읽기 위해 Redux 상태를 구독하고
// 데이터를 바꾸기 위해 Redux 액션을 보냅니다.
class Counter extends Component {
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200)
        ];

        this.props.handleSetColor(color)
    }

    render() {
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        }

        return (
            <div style={style}>
                <Value number={this.props.number}/>
                <Control 
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    }
}

// connect: 컴포넌트를 Redux에 연결하는 함수를 반환합니다. Store에 연결 된 새로운 컴포넌트 클래스가 반홥됩니다.
// connect의 옵션이 없으면 this.props.store로 접근이 가능합니다.
// connect(
//     mapStateToProps,         - Store의 State를 해당 컴포넌트의 Props로 연결시켜주는 함수입니다. 
//     mapDispatchToProps,      - Dispatch함수를 Props로 연결시켜주는 함수입니다.
//     mergeProps,              - State, Dispatch를 파라미터로 가지고 컴포넌트에 연결해야할 Props가 State와 Dispatch를 동시에 사용해야한다면 쓰인다.
//     option                   - 객체형태{[pure = true], [withRef = false]} 이고 pure가 true이면 불필요한 업데이트를 하지않는다. withRef가 true이면 Redux에 연결된 컴포넌트를 
//                                getWrappedInstance()에 통하여 접근할 수 있게 한다.
// )

// 여기서 사용되는 state는 컴포넌트의 state와는 다르다.
// 어떤 props가 어떤 state와 연결될지 정합니다.
const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    };
}

const mapDispatchToProps = (dispatch) => {
    // 간단하게 설정할 수 있게 아래 함수가 제공됩니다. 다만 아래함수는 함수이름을 임의로 설정할 수 없고 액션 생성자의 이름을 써야합니다.
    // return bindActionCreators(actions, dispatch);
    
    return {
        handleIncrement: () => {dispatch(actions.increment())},
        handleDecrement: () => {dispatch(actions.decrement())},
        handleSetColor: (color) => {dispatch(actions.setColor(color))},
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);