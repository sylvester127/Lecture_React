import React, {Component} from 'react';

export default class Counter extends Component {
    state = {
        number: 0
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
