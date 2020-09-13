import React, {Component, Fragment} from 'react';

// JSX 표현식 포함하는 방법입니다.

export default class WrappedElement extends Component {
    render(){
        const name = "react";

        return (
          <Fragment>
            <h1>hi~</h1>
            <h2>this is {name}!</h2>
          </Fragment>
        );
    }
}
