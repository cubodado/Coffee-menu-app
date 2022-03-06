const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem("menu"));
  }
}

function App() {
  this.menu = [];
  this.init = () => {
    if (store.getLocalStorage().length > 1) {
      this.menu = store.getLocalStorage();
    }
    render();
  };
  
  const render = () => {
    const menuItemTemplate = this.menu.map((item, id) => {
      return `
        <li data-menu-id="${id}" class="menu-list-item d-flex items-center py-2">
          <span class="w-100 pl-2 menu-name">${item.name}</span>
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
    }).join("");

    $("#espresso-menu-list").innerHTML = menuItemTemplate;
    updateMenuCount();
  };

  const updateMenuCount = () => {
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length
    $(".menu-count").innerText = `총 ${menuCount} 개`;
  };

  const addMenuName = () => {
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해주세요");
      return;
    }
    
    const espressoMenuName = $("#espresso-menu-name").value;
    this.menu.push({ name: espressoMenuName });
    store.setLocalStorage(this.menu);
    render();

    $("#espresso-menu-name").value = "";
  };

  const editMenuName = (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const newMenuName = prompt("변경할 메뉴 이름을 입력해 주세요.", $menuName.innerText);
    this.menu[menuId].name = newMenuName;
    store.setLocalStorage(this.menu);
    $menuName.innerText = newMenuName;
  };

  const removeMenuName = (e) => {
    if (confirm("삭제하시겠습니까?")) {
      const menuId = e.target.closest("li").dataset.menuId;
      this.menu.splice(menuId, 1);
      store.setLocalStorage(this.menu);
      e.target.closest("li").remove();
      const li = document.querySelectorAll("li");
      li.forEach((item, index) => {
        item.dataset.menuId = index;
      });
      updateMenuCount();
    }
  };

  // form 태그가 자동으로 전송되는 것 막아주기
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // 사용자 입력 이벤트 발생 시, 입력값으로 메뉴 템플릿 생성
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    // 엔터키가 아니면 return
    if (e.key !== "Enter") {
      return;
    }
    addMenuName();
  });

  // 확인 버튼 이벤트 발생 시, 입력값으로 메뉴 템플릿 생성
  $("#espresso-menu-submit-button").addEventListener("click", addMenuName);

  // 이벤트 위임
  $("#espresso-menu-list").addEventListener("click", (e) => {
    // 수정 버튼 이벤트 발생 시, 입력값으로 메뉴 이름 변경
    if (e.target.classList.contains("menu-edit-button")) {
      editMenuName(e);
    }
    // 삭제 버튼 이벤트 발생 시, 메뉴 삭제
    if (e.target.classList.contains("menu-remove-button")) {
      removeMenuName(e);
    }
  });

  $("nav").addEventListener("click", (e) => {
    const isCategoryButton = e.target.classList.contains("cafe-category-name");
    if (isCategoryButton) {
      const categoryName = e.target.dataset.categoryName;
      console.log(categoryName);
    }
  });
}

const app = new App();
app.init();