import React, {Component} from 'react';

// React DOM은 HTML 어트리뷰트 이름 대신 camelCase 프로퍼티 명명 규칙을 사용합니다.
// ex) class 대신에 className을 사용, style의 backgroundColor

export default class ClassName extends Component {
    render(){
        const style = {
            backgroundColor: 'black',
            padding: '16px',
            color: 'white',
            fontSize: '12px'
        };

        return (
            <div className="App" style={style}>
                <h1>hi~</h1>
                <h2>this is react!</h2>
                <input/>
            </div>
        );
    }
}
