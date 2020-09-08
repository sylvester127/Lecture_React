import React, {Component} from 'react';
// props 속성을 나타내는 데이터
// props 와 state 인데요, 미리 요약하여 설명드리자면 props 는 부모 컴포넌트가 자식 컴포넌트에게 주는 값입니다. 
// 자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 할 수 는 없습니다.
// 초기 마운트 속도가 빠름
// 불필요한 기능이 없음
//반면에 state 는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있습니다.

export default class MyName extends Component {
    static defaultProps = {
        name: '기본이름'
    }

    render(){
        return (
            <div>
                안녕하세요 제 이름은 <b1>{this.props.name}</b1>입니다.
            </div>
        );
    }
}
