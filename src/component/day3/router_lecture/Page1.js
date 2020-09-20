import React from 'react';
import queryString from 'query-string'; 
// match 객체는 
// params: (object) url로부터 키/값 쌍을 가져온다.
// isExact: (boolean) 전체 url이 일치하는 경우 true를 반환한다.
// path: (string)
// url: (string)
// 프로퍼티를 갖는다.
const Page1 = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(match);
    console.log(location);
    return (
        <div>
            <h1>{match.params.name}입니다.</h1>
            <h1>인덱스는 {query.index}입니다.</h1>
        </div>
    );
}

export default Page1;