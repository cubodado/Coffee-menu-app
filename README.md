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