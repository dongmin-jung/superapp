# SuperUX-todo 
- SuperUX Studio로 만든 Super App Sample code

## Install the dependencies
- `npm install`을 실행하여 필요한 라이브러리들을 설치하세요. 구체적으로는 아래의 작업들이 실행됩니다.
  - 필요한 라이브러리들이 node_modules 폴더에 설치됩니다.
  - package-lock.json 파일이 생성됩니다.

## Project structure
```
.
+-- conf // 각종 설정 파일 보관 디렉토리
+-- deploy // 패키징 시에 생성되는 standalone application 및 installer
+-- dist // 빌드 시에 생성되는 파일들
+-- public // 외부로 공개할 파일들
+-- resource // JS 외의 리소스 파일
+-- src // 개발 디렉토리
| +-- component // React component 디렉토리
| +-- hook // React hook 디렉토리
| +-- store // 프로그램의 상태 및 로직 디렉토리
| +-- window // 웹 환경 / Electron 환경에서의 창 조작에 관련된 디렉토리 (= SuperOffice의 routes 폴더)
| +-- style // 스타일(CSS/SCSS) 디렉토리
| +-- index.tsx // 엔트리 포인트
+-- .gitignore
+-- package-lock.json
+-- package.json
+-- tsconfig.json // 타입스크립트 설정 파일
```

## 웹 환경에서 빌드 & 디버깅하기

- API.ts 파일의 this.baseUrl에 구동한 SuperDX 서버 url을 입력하세요.

(1) Debug the code

```bash
$ npm run serve
```

- 파일이 **development mode**로 빌드되고, 테스트용 서버가 실행됩니다.
  - 결과물 파일들은 **"dist"** 폴더에 생성됩니다.
  - 결과물 JS 파일에 [난독화, 압축화가 적용되지 않으며, source map이 생성됩니다.](https://12bme.tistory.com/357)
  - 소스 코드를 수정하고 저장하면 자동으로 rebuild & refresh가 됩니다.
- 웹 브라우저에서 `127.0.0.1:8080`에 접속하면 웹사이트를 띄울 수 있습니다.
  - 다른 컴퓨터 또는 스마트폰에서 접속하려면 `(개발 컴퓨터 IP):8080`으로 접속하세요.

(2) Debug the code (in production mode)

```bash
$ npm run serve:production
```

- 파일이 **production mode**로 빌드되고, 테스트용 서버가 실행됩니다.
  - 결과물 JS 파일에 난독화, 압축화가 적용되며 source map은 생성되지 않습니다.

(3) Build the code

```bash
$ npm run build
```

- 파일이 **production mode**로 빌드됩니다.

## For developers

* React Component 는 MUI 기반으로 제작했습니다. MUI 는 Super App Studio 에서 기본으로 제공하는 컴포넌트입니다.
* UX 컴포넌트 제작을 고려하는 경우 src/component/composite/Composite_1.tsx 를 참고하시면 됩니다. UX 컴포넌트는 해당 컴포넌트 형태로 component marketplace 에 등록할 계획입니다.
