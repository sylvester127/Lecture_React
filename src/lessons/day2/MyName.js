import React, {Component} from 'react';

// props 속성을 나타내는 데이터
// 자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 할 수 는 없습니다.
// 초기 마운트 속도가 빠름
// 불필요한 기능이 없음

export default class MyName extends Component {
    // 만약 부모 컴포넌트에서 Props를 지정하지않는다면 defaultProps가 들어간다.
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

// defaultProps는 아래와 같은 방법으로도 설정이 가능하다.
/*
MyName.defaultProps = {
    name: '기본이름'
};
*/