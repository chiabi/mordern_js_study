# 모던 자바스크립트 라이브러리 프레임워크 (DAY02)

[ESLint](http://slides.com/yamoo9/eslint#/)
[Rollup](http://slides.com/yamoo9/rollup#/)

[NVM for windows](https://github.com/coreybutler/nvm-windows) 설치

```sh
$ nvm version

// 설치 가능한 버전 찾기 (테이블로 보여짐)
$ nvm list available
// 설치된 버전들을 보여줌
$ nvm list

// 설치하고 싶은 버전을 뒤에 써서 설치
$ nvm install 8.1.2

// 원격(remote)에서 다운 가능 한 것을 출력함 - nvm 옵션을 보여줌
$ nvm ls -remote
```
버전이 달라지면 문제가 생길 수 있음, Sass는 아직 6버전이 더 문제해결에 나았다고 함


Rollup : 성능면에서 본다면 webpack보다 더 좋지만 webpack을 많이들 사용한다.

```sh
// Git
// 브랜치 정해서 카피할 경우 
git clone -b 2017.12 https://github...
```


JQUERY+ES6 폴더에서 index.html, package.json 만들어준다.
yarn을 설치해서 사용할 것임
```sh
$ echo {} > package.json

$ npm i -g yarn

// 설치되었는 지 확인
$ npm ll -g yarn

$ yarn -v

// 제이쿼리 로컬로 설치
$ yarn add jquery
```
yarn은 버전관리 잘해주고 엄청 빠름!!!  
`yarn.lock`는 패키지를 관리하기 위한 설계도 같은 거 지우면 안됨

제이쿼리 노드모듈 파일을 보면 모듈로 관리하고 있음  
ES6부터는 모듈의 개념이 생겼지만 백엔드의 기술(node.js)을 사용해서 브라우저에서 사용할 수 있도록 해야한다.


WEEK__02/LECUTRE/
```sh
// 제이쿼리 로컬로 설치 배포할 것이므로 그냥 디펜던시로 설치함
$ yarn add jquery

// 웹서비스에서 쓰지않고 개발에서 쓸것이므로 --dev로 설치한다.
$ yarn add --dev babel-cli

$ mkdir dist src
```
dist/index.html

src/es6/main.js -> main.js에서 작업을 시작할거임

### 수업목표

jQuery에 없는 기능을 개발, toggle버튼 스타일을 es5로 만들고  
그것을 리팩토링 해보고  
es6로 변경해 바벨에서 돌려볼 거임

[BULMA](https://bulma.io/) CSS 프레임워크를 이용할 것이므로 설치한다
```
$ yarn add bluma
```

```
// yarn을 쓰면 명령어를 간소화 할 수 있다.
$ npm run babel
$ yarn babel

// 프리셋 설치
$ yarn add --dev babel-preset-env
```

***
[jQuery는 이벤트를 어떻게 처리하는가?](http://d2.naver.com/helloworld/1855209)