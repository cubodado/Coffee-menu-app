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
  this.menu = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: []
  };
  this.currentCategoryName = "espresso";
  this.init = () => {
    if (store.getLocalStorage()) {
      this.menu = store.getLocalStorage();
    }
    render();
  };
  
  const render = () => {
    const menuItemTemplate = this.menu[this.currentCategoryName].map((item, id) => {
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

    $("#menu-list").innerHTML = menuItemTemplate;
    updateMenuCount();
  };

  const updateMenuCount = () => {
    const menuCount = $("#menu-list").querySelectorAll("li").length
    $(".menu-count").innerText = `총 ${menuCount} 개`;
  };

  const addMenuName = () => {
    if ($("#menu-name").value === "") {
      alert("값을 입력해주세요");
      return;
    }
    
    const menuName = $("#menu-name").value;
    this.menu[this.currentCategoryName].push({ name: menuName });
    store.setLocalStorage(this.menu);
    render();

    $("#menu-name").value = "";
  };

  const editMenuName = (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const newMenuName = prompt("변경할 메뉴 이름을 입력해 주세요.", $menuName.innerText);
    this.menu[this.currentCategoryName][menuId].name = newMenuName;
    store.setLocalStorage(this.menu);
    $menuName.innerText = newMenuName;
  };

  const removeMenuName = (e) => {
    if (confirm("삭제하시겠습니까?")) {
      const menuId = e.target.closest("li").dataset.menuId;
      this.menu[this.currentCategoryName].splice(menuId, 1);
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
  $("#menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // 사용자 입력 이벤트 발생 시, 입력값으로 메뉴 템플릿 생성
  $("#menu-name").addEventListener("keypress", (e) => {
    // 엔터키가 아니면 return
    if (e.key !== "Enter") {
      return;
    }
    addMenuName();
  });

  // 확인 버튼 이벤트 발생 시, 입력값으로 메뉴 템플릿 생성
  $("#menu-submit-button").addEventListener("click", addMenuName);

  // 이벤트 위임
  $("#menu-list").addEventListener("click", (e) => {
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
      this.currentCategoryName = categoryName;
      $("#category-title").innerText = `${e.target.innerText} 메뉴 관리`;
      render();
    }
  });
}

const app = new App();
app.init();