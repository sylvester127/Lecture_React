import React, { Component } from 'react';
import './styles/App.css';
// Import concept examples here as needed
// import ClassName from './concepts/basics/ClassName';
// import CloseTeg from './concepts/basics/CloseTeg';
// import Comment from './concepts/basics/Comment';
// import ConditionalRendering from './concepts/basics/ConditionalRendering';
// import JSXExpression from './concepts/basics/JSXExpression';
// import WrappedElement from './concepts/basics/WrappedElement';
// import MyName from './concepts/basics/MyName';
// import MyNameFunction from './concepts/basics/MyNameFunction';
// import Lifecycle from './concepts/basics/Lifecycle';
// import Comment1 from './concepts/basics/Comment1';
// import Comment2 from './concepts/basics/Comment2';
// import Comment3 from './concepts/basics/Comment3';
// import Counter from './concepts/basics/Counter';
// import Counter2 from './concepts/basics/Counter2';
// import Toggle from './concepts/events/Toggle';
// import AttendanceBook from './concepts/lists/AttendanceBook';
// import PhoneForm from './concepts/forms/PhoneForm';
// import FormExample from './concepts/forms/FormExample';
// import Control from './concepts/redux/Control';
// import Value from './concepts/redux/Value';
// import ReduxCounter from './concepts/redux/Counter'; // Renamed to avoid conflict with basics/Counter
// import ReduxExample from './concepts/redux/ReduxExample';
// import RoutingExample from './concepts/routing/RoutingExample';


// Comment 데이터를 별도의 객체로 분리
// const comments = [
//   {name:'Naram Kim', content: 'Comment!'},
//   {name:'철수', content: '안녕하세요~!'},
//   {name:'맹구', content: '안녕...'},
// ]

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      comments: [
        {name:'Naram Kim', content: 'Comment!'},
        {name:'철수', content: '안녕하세요~!'},
        {name:'맹구', content: '안녕...'}
      ]
    }
  }
  
  render() {
    const {comments} = this.state;
    
    return (
      <div>
        {/* ===element 예제====================================== */}
        {/* App.js에 있음 */}
        
        {/* ===간단한 Props 예제====================================== */}
        {/* <MyName/> */}
        {/* <MyNameFunction name="React"/> */}
        
        {/* ===Comment 컴포넌트 작성====================================== */}
        {/* <Comment1></Comment1> */}
        
        {/* ===Comment에 Props 적용====================================== */}
        {/* <Comment2 name='Naram Kim' content='Comment!'></Comment2>
        <Comment2 name='철수' content='안녕하세요~!'></Comment2> */}
        
        {/*  Comment 데이터를 별도의 객체로 분리하기  */}
        {/* {comments.map((comment, index) => {
          return (
            <Comment2 
              name={comment.name} 
              content={comment.content}/>
          );
        })} */}
        
        {/* ===State 예제====================================== */}
        {/* <Counter/> */}
        
        {/* 아래 예제 App class */}
        
        {/* ===map 예제====================================== */}
        {/* <AttendanceBook></AttendanceBook> */}
        
        {/* {comments.map((comment, index) => {
          return (
            <Comment3
            name={comment.name} 
            content={comment.content}/>
            );
          })} */}
        
        {/* ===React Lifecycle====================================== */}
        {/* <Lifecycle name='Naram Kim' content='Comment!'></Lifecycle> */}
        
        {/* ===Event 예제====================================== */}
        {/* <Toggle></Toggle> */}

      </div>
    );
  }
}

export default App;