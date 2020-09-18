action은 작업에 대한 정보를 지니고 있는 객체입니다.

Counter 프로젝트에서 필요한 액션은

1. 값을 증가시키기
2. 값을 감소시키기
3. 새로운 색상 설정하기

이름은 대문자와 under hyphen로 작성합니다.

1. INCREMENT
2. DECREMENT
3. SET_COLOR

ACtionTypes은 액션들의 이름들을 상수형태로 만든 파일입니다.

actions/index.js에서 이 액션들을 사용할 수 있게 액션생성자 형태로 만든 파일입니다.
파일 이름인 index.js인 이유는 actions 디렉토리를 불러왔을 때, 자동으로 index.js이 로드되기 때문입니다.

만약 프로젝트가 크고 액션이 많다면 여러 파일로 분리해주어도 됩니다.