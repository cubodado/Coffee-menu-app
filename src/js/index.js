function App() {
  // form 태그가 자동으로 전송되는 것 막아주기
  document
  .querySelector("#espresso-menu-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
  });
  // 사용자 입력 이벤트 발생 시 입력값 콘솔로 출력하기
  document
    .querySelector("#espresso-menu-name")
    .addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        console.log(document.querySelector("#espresso-menu-name").value);
      }
  });
}

App();