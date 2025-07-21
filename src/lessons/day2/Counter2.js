import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
        // super(props)를 호출하는 이유는 컴포넌트를 만들면서 Component 를 상속하고 constructor 를 작성하게 되면 
        // 기존의 클래스 생성자를 덮어쓰게 됩니다. 그렇기에, 리액트 컴포넌트가 지니고있던 생성자를 super 를 통하여 미리 실행하고, 
        // 그 다음에 우리가 할 작업 (state 설정) 을 해주는 것 입니다.
        // v16.3 부터 바낀 문서 https://ko.reactjs.org/docs/context.html
        super(props);
        this.state = {
            number: 0
        };
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }
    /*
    다음과 같은 형식으로도 작성할 수 있지만 this 가 undefined 로 나타나서 제대로 처리되지 않게 됩니다. 
    이는 함수가 버튼의 클릭이벤트로 전달이 되는 과정에서 “this” 와의 연결이 끊겨버리기 때문입니다.

    constructor 에서 다음과 같이 바인드해주는 작업을 해줘야합니다.
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);

    handleIncrease() {
        this.setState({
          number: this.state.number + 1
        });
      }
    
      handleDecrease() {
        this.setState({
          number: this.state.number - 1
        });
      }
    */
    
    render(){
        return (
            <div>
                <div>
                    값: {this.state.number}
                </div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}
