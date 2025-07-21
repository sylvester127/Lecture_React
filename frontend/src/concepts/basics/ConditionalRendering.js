import React, {Component} from 'react';

// 조건부 렌더링에 관한 것입니다.

export default class ConditionalRendering extends Component {
    render(){
        return (
            <div>
                {/* 삼항 연산자 */}
                {
                    1 + 1 === 2 
                    ? (<div>맞아요!</div>)
                    : (<div>틀려요!</div>)
                }

                {/* And 연산자 */}
                {
                    1 + 1 === 2 && (<div>맞아요!</div>)
                }
            </div>
        );
    }
}
