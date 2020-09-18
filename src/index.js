import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import App2 from './App2';
import App3 from './App3';
import {createStore} from 'redux';
import reducers from './component/day3/reducers/';
import * as actions from './component/day3/actions';
import { Provider } from 'react-redux';

// element 예제
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, Workld!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
// 
// setInterval(tick, 1000);

// Store는 어플레케이션의 현재상태를 지니고 있습니다.
// Store을 만들기위해 createStore함수를 호출하고 인수로 reducer을 넣어줍니다.
const store = createStore(reducers);

// getState()
// 현재 상태를 반환하는 함수입니다.
// console.log(store.getState());

// subscribe(listener)
// 상태가 바뀔때마다 실행할 함수를 등록합니다. listener가 상태가 바뀔 때마다 실행될 callback 합수입니다.
// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// dispatch(action) 
// dispatch가 실행되면 Store는 Reducer 함수에 현재 자신 상태와 방금 전달받은 action을 전달합니다.
// 그럼 Reducer가 어떤 변화가 필요한지 알아내서 변화를 주고, 새 상태를 전달하면 현상태를 갈아끼웁니다.
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200, 200, 200]));

// subscribe()의 반환하는 값이 unsubscribe라는 함수입니다. 따라서 그 함수를 실행하면 더 이상 구독을 하지않게 됩니다.
// unsubscribe();
// store.dispatch(actions.setColor([210, 210, 210]));

ReactDOM.render(
  <React.StrictMode>
    {/* day2 예제 */}
    {/* <App /> */}

    {/* day3 From 예제 */}
    {/* <App2 /> */}

    {/* Redux 예제 */}
    {/* 컴포넌트에서 Redux를 사용하도록 제공해주는 컴포넌트 */}
    <Provider store={store}>
      <App3/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
