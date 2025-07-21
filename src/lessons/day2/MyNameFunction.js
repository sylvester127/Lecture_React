import React from 'react';

// 단순하게 Props만 받아와서 보여주기만 하는 것은 함수형 컴포넌트가 더 간편하게 작성이 가능합니다.
// 
// 함수형 컴포넌트와 클래스형 컴포넌트의 주요 차이점은 state와 LifeCyle이 빠져있다는 점입니다. 
// 그래서 컴포넌트 초기 마운트가 아주 미세하게 빠르고 메모리 자원을 덜 사용합니다.

/*
function MyNameFunction({name="기본이름"}) {
    return(
        <div>
            안녕하세요 제 이름은 <b1>{name}</b1>입니다.
        </div>
    );
}
*/

// 아래 코드는 ES6의 람다식 표현으로 함수형 컴포넌트를 작성한 것입니다.
 const MyNameFunction = ({name="기본이름"}) => {
    return (
        <div>
            안녕하세요 제 이름은 <b1>{name}</b1>입니다.
        </div>
    );
}

export default MyNameFunction;