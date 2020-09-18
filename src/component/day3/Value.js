import React, { Component } from 'react';

// number를 렌더링 해주는 컴포넌트 입니다.
class Value extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

// -1이 나오면 Parent에서 값을 제대로 못 가져왔다는 것을 의미합니다.
Value.defaultProps = {
    number: -1
};

export default Value;