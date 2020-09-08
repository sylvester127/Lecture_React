import React, {Component} from 'react';

export default class ClassName extends Component {
    render(){
        const style = {
            backgroundColor: 'black',
            padding: '16px',
            color: 'white',
            fontSize: '12px'
        };

        return (
            <div style={style}>
                <h1>hi~</h1>
                <h2>this is react!</h2>
                <input/>
            </div>
        );
    }
}
