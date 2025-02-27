# React 성경 프로젝트

이 프로젝트는 사용자가 매일 성경을 읽을 수 있도록 설계된 React 애플리케이션입니다. 북마크 기능, 장 보기, 구글을 통한 사용자 인증 등의 기능을 포함하고 있습니다.

## 폴더 구조

```
src
├── _common
│   ├── auth
│   │   ├── components
│   │   ├── enums
│   │   ├── hooks
│   │   ├── interfaces
│   │   ├── repositories
│   │   └── services
│   ├── navigation
│   │   ├── constants
│   │   └── ui
│   ├── ui
│   └── utils
├── bookmark
│   ├── components
│   ├── dtos
│   ├── entities
│   ├── interfaces
│   ├── repositories
│   └── services
├── books
│   ├── components
│   ├── dtos
│   ├── entities
│   ├── interfaces
│   ├── repositories
│   └── services
├── contents
│   ├── components
│   ├── dtos
│   ├── entities
│   ├── interfaces
│   ├── repositories
│   └── services
├── me
│   ├── hooks
│   ├── interfaces
│   ├── repositories
│   └── services
├── shared
│   ├── constants
│   ├── services
│   └── utils
├── tabs
│   ├── HomeTab.tsx
│   ├── setting
│   └── ...
├── __tests__                
│   ├── mocks                
│   │   ├── mockAuth.service.ts
│   │   ├── mockBook.service.ts
│   │   ├── mockContent.service.ts
│   │   └── mockBookmark.service.ts
│   ├── services            
│   │   ├── book.service.test.ts
│   │   ├── content.service.test.ts
│   │   └── bookmark.service.test.ts
└── App.tsx
```

## 주요 라이브러리

- **React**: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.
- **TypeScript**: JavaScript의 타입을 추가한 슈퍼셋으로, 정적 타입 검사를 지원합니다.
- **Vite**: 현대 웹 프로젝트를 위한 빠르고 가벼운 개발 경험을 제공하는 빌드 도구입니다.
- **React Router**: React 애플리케이션에서 라우팅을 관리하기 위한 라이브러리입니다.
- **React Query**: React 애플리케이션에서 데이터를 가져오고, 캐시하고, 업데이트하는 라이브러리입니다.
- **InversifyJS**: JavaScript 및 TypeScript 애플리케이션을 위한 강력하고 경량의 제어 반전(IoC) 컨테이너입니다.
- **Recharts**: React 컴포넌트로 구성된 차트 라이브러리입니다.
- **React Icons**: React 애플리케이션에서 인기 있는 아이콘을 포함하기 위한 라이브러리입니다.
- **Day.js**: 날짜를 파싱, 검증, 조작 및 포맷하는 경량 날짜 라이브러리입니다.

## 프로젝트 개요

이 프로젝트를 통해 사용자는:

- 성경 구절을 읽고 북마크할 수 있습니다.
- 장을 보고 성경을 탐색할 수 있습니다.
- 구글을 통해 인증하여 개인화된 경험을 제공합니다.
- 인터랙티브한 차트를 통해 북마크를 시각화할 수 있습니다.

애플리케이션은 반응형으로 설계되어 다양한 기기에서 원활한 경험을 제공합니다.

실행 :
git clone 후 npm run start:dev 

## 작성자
이메일: nbmg1128@gmail.com
