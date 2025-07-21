import React, { Component } from 'react';

class PhoneForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            //  여러 input을 제어
            // 각 요소에 name 속성을 추가한 후 event.target.name 값을 기반으로 핸들러 함수를 고를 수 있습니다.
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        // 페이지 리로딩 방지하기 위해 preventDefault()를 사용합니다.
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달합니다.
        this.props.onCreate(this.state);
        // 상태 초기화를 합니다.
        this.setState({
          name: '',
          phone: ''
        })
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                placeholder="이름"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                />
                <input
                placeholder="전화번호"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;