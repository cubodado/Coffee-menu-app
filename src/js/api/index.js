const BASE_URL = "http://localhost:3000/api";

const MenuApi = {
  async getAllMenuByCategory(category) {
    const response = await fetch(`${BASE_URL}/category/${category}/menu`)
    return response.json();
  },

  async createMenu(category, name) {
    const response = await fetch(`${BASE_URL}/category/${category}/menu`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });
    if (!response.ok) {
      console.error("Error");
    }
  },

  async editMenu(category, name, menuId) {
    const response = await fetch(`${BASE_URL}/category/${category}/menu/${menuId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });
    if (!response.ok) {
      console.error("Error");
    }
    return response.json();
  },

  async toggleSoldOut(category, menuId) {
    const response = await fetch(`${BASE_URL}/category/${category}/menu/${menuId}/soldout`, {
      method: "PUT"
    }); 
    return response.json();
  },
  
  async deleteMenu(category, menuId) {
    await fetch(`${BASE_URL}/category/${category}/menu/${menuId}`, {
      method: "DELETE"
    })
  }
};

export default MenuApi;