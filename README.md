# React Lecture Project

이 프로젝트는 React 학습을 위한 예제 코드를 포함하고 있습니다. Create React App으로 시작되었으며, 교육 목적에 맞게 프로젝트 구조가 재편성되었습니다.

## 프로젝트 구조

```
React Lecture/
├───.git/               # Git 버전 관리 정보
├───node_modules/       # 프로젝트 의존성 (루트에서 관리)
├───backend/            # Node.js 백엔드
│   ├───src/            # 백엔드 소스 코드
│   │   ├───index.js            # 백엔드 서버의 메인 진입점
│   │   ├───config/             # 설정 파일 (예: 데이터베이스 연결, 환경 변수)
│   │   ├───middleware/         # 커스텀 미들웨어 (예: 인증, 로깅)
│   │   ├───models/             # 데이터베이스 모델 (예: Mongoose 스키마, Sequelize 모델)
│   │   ├───routes/             # API 라우트/엔드포인트
│   │   │   ├───auth.js         # 인증 관련 라우트 (예: 로그인, 회원가입)
│   │   │   ├───users.js        # 사용자 관리 라우트
│   │   │   └───products.js     # 예시 리소스 라우트
│   │   ├───controllers/        # 요청 처리 로직 (라우트에서 호출)
│   │   ├───services/           # 비즈니스 로직, 데이터 조작 (컨트롤러에서 호출)
│   │   └───utils/              # 유틸리티 함수 (예: 에러 처리, 유효성 검사)

└───frontend/           # React 프론트엔드 애플리케이션
    ├───public/         # 정적 파일 (index.html 등)
    └───src/            # 프론트엔드 소스 코드
        ├───App.js              # 메인 애플리케이션 컴포넌트 (개념별 예제로 이동하는 허브 역할)
        ├───App.test.js         # App 컴포넌트 테스트 파일
        ├───index.js            # 애플리케이션 진입점 (React DOM 렌더링)
        ├───serviceWorker.js    # PWA를 위한 서비스 워커
        ├───setupTests.js       # 테스트 환경 설정
        ├───assets/             # 이미지, 아이콘 등 정적 자산
        ├───styles/             # 전역 CSS 파일
        └───concepts/           # React 개념/기능별 예제
            ├───basics/         # JSX, 컴포넌트, Props, State, 생명주기, 조건부 렌더링
            ├───events/         # 이벤트 처리
            ├───forms/          # 폼 처리
            ├───lists/          # 리스트와 Key
            ├───hooks/          # useState, useEffect 등 훅스 (현재 예제 없음, 추후 추가 가능)
            ├───redux/          # Redux 통합 (actions, reducers 포함)
            └───routing/        # React Router
├───.gitignore          # Git 무시 파일 (전체 프로젝트에 적용)
├───package-lock.json   # 정확한 의존성 버전 기록
├───package.json        # 프로젝트 메타데이터 및 의존성
└───README.md           # 프로젝트 설명 (현재 파일)
```

## 시작하기

프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요:

1.  **저장소 클론:**
    ```bash
    git clone [저장소 URL]
    cd React Lecture
    ```
2.  **의존성 설치:** (프로젝트 루트에서 실행)
    ```bash
    npm install
    # 또는 yarn install
    ```

### 프론트엔드 실행

```bash
cd frontend
npm start
# 또는 yarn start
```

애플리케이션은 개발 모드로 실행되며, [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 백엔드 실행

```bash
npm run start:backend
# 또는 yarn start:backend
```

백엔드 서버는 [http://localhost:5000](http://localhost:5000)에서 실행됩니다.

## 사용 가능한 스크립트

이 프로젝트는 Create React App에서 제공하는 표준 스크립트를 사용합니다.

*   `npm start`: 개발 서버를 시작합니다.
*   `npm test`: 테스트 러너를 실행합니다.
*   `npm run build`: 프로덕션용으로 앱을 빌드합니다.
*   `npm run eject`: (주의: 되돌릴 수 없는 작업입니다) 프로젝트 구성을 완전히 제어할 수 있도록 eject합니다.

자세한 내용은 [Create React App 문서](https://create-react-app.dev/docs/getting-started)를 참조하세요.

## 학습 자료

### React 학습 자료

*   [React 공식 문서](https://react.dev/)

### Node.js / Express.js 학습 자료

*   [Node.js 공식 문서 (HTTP 모듈)](https://nodejs.org/docs/latest/api/http.html)
*   [Express.js 공식 문서](https://expressjs.com/)
