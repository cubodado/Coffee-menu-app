const $ = (selector) => document.querySelector(selector);

function App() {
  // form 태그가 자동으로 전송되는 것 막아주기
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const addMenuName = () => {
    // 빈 값인 경우 alert를 사용해 알림창
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해주세요");
      return;
    }
    
    const espressoMenuName = $("#espresso-menu-name").value;
    const menuItemTemplate = (name) => {
      return `
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
      `;
    };

    // insertAdjacentHTML 사용해 ul 태그 내부에 menuItemTemplate 추가
    $("#espresso-menu-list").insertAdjacentHTML(
      "beforeend",
      menuItemTemplate(espressoMenuName)
    );

    // li 갯수 세서 총 개수 알아내기
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length
    
    // innerText 사용해 총 개수 값 반영해 변경하기
    $(".menu-count").innerText = `총 ${menuCount} 개`;

    // input 초기화
    $("#espresso-menu-name").value = "";
  };

  // 사용자 입력 이벤트 발생 시, 입력값으로 메뉴 템플릿 생성
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    // 엔터키가 아니면 return
    if (e.key !== "Enter") {
      return;
    }
    addMenuName();
  });

  // 확인 버튼 이벤트 발생 시, 입력값으로 메뉴 템플릿 생성
  $("#espresso-menu-submit-button").addEventListener("click", () => {
    addMenuName();
  })

  // 수정 버튼 이벤트 발생 시, 입력값으로 메뉴 이름 변경
  $("#espresso-menu-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-edit-button")) {
      const menuName = e.target.closest("li").querySelector(".menu-name").innerText;
      const newMenuName = prompt("변경할 메뉴 이름을 입력해 주세요.", menuName);
      e.target.closest("li").querySelector(".menu-name").innerText = newMenuName;
    }
  });
}

App();