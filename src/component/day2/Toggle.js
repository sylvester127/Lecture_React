import React, {Component} from 'react';

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    // Class Field Syntax
    // 아래 주석을 풀고 위의 bind 코드를 주석 처리
    // handleClick = () => {
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'On' : 'Off'}
                </button>
            </div>
        );
    }
}
