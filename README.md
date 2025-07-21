# React Lecture Project

이 프로젝트는 React 학습을 위한 예제 코드를 포함하고 있습니다. Create React App으로 시작되었으며, 교육 목적에 맞게 프로젝트 구조가 재편성되었습니다.

## 프로젝트 구조

```
React Lecture/
├───public/
└───src/
    ├───App.js              # 메인 애플리케이션 컴포넌트
    ├───App2.js             # 폼(Form) 처리 예제
    ├───App3.js             # Redux 상태 관리 예제
    ├───App4.js             # React Router 라우팅 예제
    ├───index.js            # 애플리케이션 진입점
    ├───assets/             # 이미지, 아이콘 등 정적 자산
    ├───styles/             # 전역 CSS 파일
    └───lessons/            # 일별 학습 모듈
        ├───day1/           # 1일차 학습 내용
        ├───day2/           # 2일차 학습 내용
        └───day3/           # 3일차 학습 내용
            ├───components/ # day3 관련 컴포넌트
            ├───redux/      # Redux 관련 예제 (actions, reducers)
            └───router/     # React Router 관련 예제
```

## 시작하기

프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요:

1.  **저장소 클론:**
    ```bash
    git clone [저장소 URL]
    cd React Lecture
    ```
2.  **의존성 설치:**
    ```bash
    npm install
    # 또는 yarn install
    ```
3.  **애플리케이션 실행:**
    ```bash
    npm start
    # 또는 yarn start
    ```

    애플리케이션은 개발 모드로 실행되며, [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 사용 가능한 스크립트

이 프로젝트는 Create React App에서 제공하는 표준 스크립트를 사용합니다.

*   `npm start`: 개발 서버를 시작합니다.
*   `npm test`: 테스트 러너를 실행합니다.
*   `npm run build`: 프로덕션용으로 앱을 빌드합니다.
*   `npm run eject`: (주의: 되돌릴 수 없는 작업입니다) 프로젝트 구성을 완전히 제어할 수 있도록 eject합니다.

자세한 내용은 [Create React App 문서](https://create-react-app.dev/docs/getting-started)를 참조하세요.

## React 학습 자료

*   [React 공식 문서](https://react.dev/)