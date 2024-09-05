const barBtn = document.querySelector(".header__btns__btn-bar");
const closeBtn = document.querySelector(".header__list__close");
const headerList = document.querySelector(".header__list");

console.log(headerList);
console.log(barBtn);

barBtn.addEventListener("click", function () {
  headerList.classList.toggle("header__list-show");
});
closeBtn.addEventListener("click", function () {
  headerList.classList.remove("header__list-show");
});
