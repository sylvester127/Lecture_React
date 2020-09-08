import React, {Component} from 'react';

export default class ConditionalRendering extends Component {
    render(){
        return (
            <div>
                {
                    1 + 1 === 2 
                    ? (<div>맞아요!</div>)
                    : (<div>틀려요!</div>)
                }
                {
                    1 + 1 === 2 && (<div>맞아요!</div>)
                }
            </div>
        );
    }
}
