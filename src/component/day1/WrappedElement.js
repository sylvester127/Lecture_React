import React, {Component} from 'react';

// 최상위 태그는 1개만 올 수 있습니다.

export default class WrappedElement extends Component {
    render(){
        return (
          <div>
            <h1>hi~</h1>
            <h2>this is react!</h2>
          </div>
        );
    }
}
