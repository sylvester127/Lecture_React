import React, {Component, Fragment} from 'react';

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
