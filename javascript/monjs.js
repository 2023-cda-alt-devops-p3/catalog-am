const menuItems = document.querySelectorAll(".menu2 li");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", function () {
    const subMenu = this.querySelector("ul");
    if (subMenu) {
      subMenu.classList.toggle("active");
    }
  });
});