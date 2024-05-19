/**Navigation adaptif*/
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnImgs = document.querySelectorAll(".toggle_btn img");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");

  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnImgs.forEach((img) => {
    img.src = isOpen
      ? "asset/img/icones/close.png"
      : "asset/img/icones/nav_bar.png";
  });
};
