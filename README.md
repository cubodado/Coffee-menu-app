# coffee-menu-app

> 참고 강의 : [블랙커피 Vanila JS Lv1.문벅스 카페 메뉴 앱 만들기](https://www.udemy.com/course/vanilla-js-lv1/)
>
> 참고 미션 저장소 : [blackcoffee-study/moonbucks-menu](https://github.com/blackcoffee-study/moonbucks-menu)

## 🎯 step1 요구사항

### 🏷️ 돔 조작과 이벤트 핸들링으로 메뉴 관리하기

- [x] 에스프레소 메뉴에 새로운 메뉴를 확인 버튼 또는 엔터키 입력으로 추가한다.
  - [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
  - [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.
- [x] 메뉴의 수정 버튼을 눌러 메뉴 이름 수정할 수 있다.
  - [x] 메뉴 수정시 브라우저에서 제공하는 `prompt` 인터페이스를 활용한다.
- [x] 메뉴 삭제 버튼을 이용하여 메뉴 삭제할 수 있다.
  - [x] 메뉴 삭제시 브라우저에서 제공하는 `confirm` 인터페이스를 활용한다.
- [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
- 추가되는 메뉴의 아래 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.

```js
<li class="menu-list-item d-flex items-center py-2">
  <span class="w-100 pl-2 menu-name">${name}</span>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
  >
    수정
  </button>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
  >
    삭제
  </button>
</li>
```

## ⚒️ step1 요구사항 구현 단계 

> * 요구사항 목적 정확히 체크
> * 목적 달성 위한 구현 단계 나누기
>
> * 기능 구현을 위한 필요한 개념과 지식 정리

### ☑️ 메뉴 추가

* [x] 메뉴 이름 input을 받은 후 확인 버튼을 누르면 메뉴 추가
* [x] 메뉴 이름 input을 받은 후 엔터키 누르면 메뉴 추가
* [x] 추가되는 메뉴의 아래 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입
* [x] 총 메뉴 개수를 세서 화면 상단에 표시하기
* [x] 메뉴 추가 후 input은 빈 값으로 초기화
* [x] 사용자 입력값이 빈 값이면 추가되지 않음

### ☑️ 메뉴 수정

* [x] 메뉴 이름 업데이트 시 `prompt` 인터페이스 활용
* [x] 메뉴 수정 버튼 클릭 이벤트 발생 후, 메뉴 수정 `prompt` 창이 뜸
* [x] 메뉴 수정 `prompt` 창에서 업데이트 할 메뉴 input 받은 후 확인 버튼 클릭하면 메뉴 수정

### ☑️ 메뉴 삭제

* [x] 메뉴 삭제 시 `confirm` 인터페이스 활용
* [x] 메뉴 삭제 버튼 클릭 이벤트 발생 후, `confirm` 창이 뜸
* [x] 확인 버튼 클릭하면 메뉴 삭제
* [x] 총 메뉴 개수를 세서 화면 상단에 표시하기

## 📝 step1 회고

* [step1 회고](https://cubodado.github.io/javascript/2022/03/03/Step-1.html)

<br/>

## 🎯 step2 요구사항

### 🏷️ 상태 관리로 메뉴 관리하기

* [x]  [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)에 데이터를 저장하여 새로고침해도 데이터가 남아있게 한다.

* [x] 에스프레소, 프라푸치노, 블렌디드, 티바나, 디저트 각각의 종류별로 메뉴판을 관리할 수 있게 만든다.

  * [x]  페이지에 최초로 접근할 때는 에스프레소 메뉴가 먼저 보이게 한다.

* [x] 품절 상태인 경우를 보여줄 수 있게, 품절 버튼을 추가하고 `sold-out` class를 추가하여 상태를 변경한다.

* [x] 품절 상태 메뉴의 마크업

  ```javascript
  <li class="menu-list-item d-flex items-center py-2">
    <span class="w-100 pl-2 menu-name sold-out">${name}</span>
    <button
      type="button"
      class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
    >
      품절
    </button>
    <button
      type="button"
      class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
    >
      수정
    </button>
    <button
      type="button"
      class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
    >
      삭제
    </button>
  </li>
  ```

## ⚒️ step2 요구사항 구현 단계

> * 요구사항 최대한 작게 나누기

### ☑️ localStorage

* [x] 데이터는 localStorage에 저장
  * [x] 메뉴 추가 시 저장
  * [x] 메뉴 수정 시 저장
  * [x] 메뉴 삭제 시 저장
* [x] localStorage에 있는 데이터 읽기

### ☑️ 메뉴판 관리

* [x] 에스프레소 메뉴판 관리
* [x] 프라푸치노 메뉴판 관리
* [x] 블렌디드 메뉴판 관리
* [x] 티바나 메뉴판 관리
* [x] 디저트 메뉴판 관리

### ☑️ 최초 화면

* [x] 페이지 로딩할 때 localStorage에서 에스프레소 메뉴 읽기
* [x] 에스프레소 메뉴 페이지에 그리기

### ☑️ 품절 상태 관리

* [x] 품절 버튼 추가
* [x] 품절 버튼 클릭 이벤트를 통해 localStorage 데이터의 상태 변경
* [x] 품절 메뉴에 해당하는 li 태그의 class 속성값에 sold-out 추가

## 📝 step2 회고

* [step2 회고](https://cubodado.github.io/javascript/2022/03/06/Step-2.html)

<br/>

## 🎯 step3 요구사항

### 🏷️ 서버와의 통신을 통해 메뉴 관리하기

- [ ] [링크](https://github.com/blackcoffee-study/moonbucks-menu-server)에 있는 웹 서버 저장소를 clone하여 로컬에서 웹 서버를 실행시킨다.
- [ ] 웹 서버를 띄워서 실제 서버에 데이터의 변경을 저장하는 형태로 리팩터링한다.
  - [ ] localStorage에 저장하는 로직은 지운다.
  - [ ] fetch 비동기 api를 사용하는 부분을 async await을 사용하여 구현한다.
  - [ ] API 통신이 실패하는 경우에 대해 사용자가 알 수 있게 [alert](https://developer.mozilla.org/ko/docs/Web/API/Window/alert)으로 예외처리를 진행한다.
- [ ] 중복되는 메뉴는 추가할 수 없다.

## 📝 API

### baseUrl

`http://localhost:3000`

### 메뉴 생성하기

| method | uri                          |
| ------ | ---------------------------- |
| POST   | /api/category/:category/menu |

```javascript
{
 requestBody: {
   "name": "string"
 },
 response: {
   "id": "string",
   "name": "string",
   "isSoldOut": Boolean
  }
}
```

### 카테고리별 메뉴리스트 불러오기

| method | uri                          |
| ------ | ---------------------------- |
| GET    | /api/category/:category/menu |

```javascript
{
  response: [
    {
      id: "string",
      name: "string",
      isSoldOut: Boolean,
    },
  ];
}
```

### 메뉴 이름 수정하기

| method | uri                                  |
| ------ | ------------------------------------ |
| PUT    | /api/category/:category/menu/:menuId |

```javascript
{
 requestBody: {
   "name": "string"
 },
 response: {
   "id": "string",
   "name": "string",
   "isSoldOut": Boolean
  }
}
```

### 메뉴 품절 처리하기

| method | uri                                          |
| ------ | -------------------------------------------- |
| PUT    | /api/category/:category/menu/:menuId/soldout |

```javascript
{
 response: {
   "id": "string",
   "name": "string",
   "isSoldOut": Boolean
  }
}
```

### 메뉴 삭제하기

| method | uri                                  |
| ------ | ------------------------------------ |
| DELETE | /api/category/:category/menu/:menuId |

```javascript
응답 데이터 없음
```

<br/>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

## ⚒️ step2 요구사항 구현 단계

> * 서버 요청 항목에 따라 상세하게 분류하기
> * 작은 단위로 나누어 요청이 필요한 부분을 명확하게 만들기

### ☑️ 서버 요청

* [x] 웹 서버 띄우기
* [x] 새로운 메뉴명을 추가할 수 있도록 서버 요청
* [x] 카테고리별로 메뉴 이름 리스트 불러오도록 서버 요청
* [x] 메뉴 이름을 수정할 수 있도록 서버 요청
* [x] 메뉴의 품절 상태를 토글 할 수 있도록 서버 요청
* [x] 메뉴가 삭제될 수 있도록 서버 요청

### ☑️ 리팩토링

* [ ] localStorage에 저장하는 로직 삭제
* [ ] fetch 비동기 api를 사용할 때는 async, await로 구현

### ☑️ 사용자 경험

* [ ] 중복 메뉴는 추가 불가
* [ ] API 통신 실패의 경우 alert로 예외 처리

