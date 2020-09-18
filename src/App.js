import React, { Component } from 'react';
import './App.css';
import MyName from './component/day2/MyName';
import MyNameFunction from './component/day2/MyNameFunction';
import Counter from './component/day2/Counter';
import Comment1 from './component/day2/Comment1';
import Comment2 from './component/day2/Comment2';
import Comment3 from './component/day2/Comment3';
import Lifecycle from './component/day2/Lifecycle';
import Toggle from './component/day2/Toggle';
import AttendanceBook from './component/day2/AttendanceBook';

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