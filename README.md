# coffee-menu-app

> 참고 강의 : [블랙커피 Vanila JS Lv1.문벅스 카페 메뉴 앱 만들기](https://www.udemy.com/course/vanilla-js-lv1/)
>
> 참고 미션 저장소 + step별 요구사항 : [blackcoffee-study/moonbucks-menu](https://github.com/blackcoffee-study/moonbucks-menu)

## 🎯step1

### 🏷️ 돔 조작과 이벤트 핸들링으로 메뉴 관리하기

* 요구사항 목적 정확히 체크
* 목적 달성 위한 구현 단계 나누기

* 기능 구현을 위한 필요한 개념과 지식 정리

## 📝 step1 회고

* [step1 회고](https://cubodado.github.io/javascript/2022/03/03/Step-1.html)

## ⚒️ step1 요구사항 구현 단계 

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

<br/>

## 🎯step2

### 🏷️ 상태 관리로 메뉴 관리하기

* 요구사항 최대한 작게 나누기

## 📝 step2 회고

* [step2 회고](https://cubodado.github.io/javascript/2022/03/06/Step-2.html)

## ⚒️ step2 요구사항 구현 단계

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

<br/>

## 🎯step3

### 🏷️ 서버와의 통신을 통해 메뉴 관리하기

* 서버 요청 항목에 따라 상세하게 분류하기
* 작은 단위로 나누어 요청이 필요한 부분을 명확하게 만들기

## 📝 step3 회고

* [step3 회고](https://cubodado.github.io/javascript/2022/03/13/Step-3.html)

## ⚒️ step3 요구사항 구현 단계

### ☑️ 서버 요청

* [x] 웹 서버 띄우기
* [x] 새로운 메뉴명을 추가할 수 있도록 서버 요청
* [x] 카테고리별로 메뉴 이름 리스트 불러오도록 서버 요청
* [x] 메뉴 이름을 수정할 수 있도록 서버 요청
* [x] 메뉴의 품절 상태를 토글 할 수 있도록 서버 요청
* [x] 메뉴가 삭제될 수 있도록 서버 요청

### ☑️ 리팩토링

* [x] localStorage에 저장하는 로직 삭제
* [x] fetch 비동기 api를 사용할 때는 async, await로 구현

### ☑️ 사용자 경험

* [x] 중복 메뉴는 추가 불가
* [x] API 통신 실패의 경우 alert로 예외 처리

