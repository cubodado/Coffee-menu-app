import { $ } from "./utils/dom.js";
import { MenuApi } from "./api/index.js";

function App() {
  this.currentCategoryName = "espresso";

  this.menu = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: []
  };

  this.init = async () => {
    this.menu[this.currentCategoryName] = await MenuApi.getAllMenuByCategory(
      this.currentCategoryName
    );
    render();
    initEventListeners();
  };
  
  const render = () => {
    const menuItemTemplate = this.menu[this.currentCategoryName].map((item) => {
      return `
        <li data-menu-id="${item.id}" class="menu-list-item d-flex items-center py-2">
          <span class="w-100 pl-2 menu-name ${item.isSoldOut ? "sold-out" : ""}">${item.name}</span>
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
      `;
    }).join("");

    $("#menu-list").innerHTML = menuItemTemplate;
    updateMenuCount();
  };

  const updateMenuCount = () => {
    const menuCount = this.menu[this.currentCategoryName].length;
    $(".menu-count").innerText = `총 ${menuCount} 개`;
  };

  const addMenuName = async () => {
    if ($("#menu-name").value === "") {
      alert("값을 입력해주세요");
      return;
    }
    
    const menuName = $("#menu-name").value;
    await MenuApi.createMenu(this.currentCategoryName, menuName);
    this.menu[this.currentCategoryName] = await MenuApi.getAllMenuByCategory(this.currentCategoryName);
    render();
    $("#menu-name").value = "";  
  };

  const editMenuName = async (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const newMenuName = prompt("변경할 메뉴 이름을 입력해 주세요.", $menuName.innerText);
    await MenuApi.editMenu(this.currentCategoryName, newMenuName, menuId);
    this.menu[this.currentCategoryName] = await MenuApi.getAllMenuByCategory(this.currentCategoryName);
    render();
  };

  const deleteMenu = async (e) => {
    if (confirm("삭제하시겠습니까?")) {
      const menuId = e.target.closest("li").dataset.menuId;
      await MenuApi.deleteMenu(this.currentCategoryName, menuId);
      this.menu[this.currentCategoryName] = await MenuApi.getAllMenuByCategory(this.currentCategoryName);
      render();
    }
  };

  const soldOutMenu = async (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    await MenuApi.toggleSoldOut(this.currentCategoryName, menuId);
    this.menu[this.currentCategoryName] = await MenuApi.getAllMenuByCategory(this.currentCategoryName);
    render();
  };

  const initEventListeners = () => {
    $("#menu-form").addEventListener("submit", (e) => {
      e.preventDefault();
    });
  
    $("#menu-name").addEventListener("keypress", (e) => {
      if (e.key !== "Enter") {
        return;
      }
      addMenuName();
    });
  
    $("#menu-submit-button").addEventListener("click", addMenuName);
  
    $("#menu-list").addEventListener("click", (e) => {
      if (e.target.classList.contains("menu-edit-button")) {
        editMenuName(e);
        return;
      }
      if (e.target.classList.contains("menu-remove-button")) {
        deleteMenu(e);
        return;
      }
      if (e.target.classList.contains("menu-sold-out-button")) {
        soldOutMenu(e);
        return;
      }
    });
  
    $("nav").addEventListener("click", async (e) => {
      const isCategoryButton = e.target.classList.contains("cafe-category-name");
      if (isCategoryButton) {
        const categoryName = e.target.dataset.categoryName;
        this.currentCategoryName = categoryName;
        $("#category-title").innerText = `${e.target.innerText} 메뉴 관리`;
        this.menu[this.currentCategoryName] = await MenuApi.getAllMenuByCategory(this.currentCategoryName)
        render();
      }
    });
  };
}

const app = new App();
app.init();