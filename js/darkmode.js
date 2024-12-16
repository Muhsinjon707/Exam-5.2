// const searchBox = document.querySelector(".search-box");
// const inputWordValue = document.querySelector(".word-name");
// const spanLineValue = document.querySelectorAll(".line-left");
// const meaningText = document.querySelectorAll("span#meaning-text");
// const fontOption = document.querySelectorAll(".font-option");

const darkModeBtn = document.querySelector(".switch");
const moonImg = document.querySelector(".moon-img");
const searchField = document.querySelector("#search");

if (localStorage.getItem("isDark") == "true") {
    darkModeBtn.checked = true;
    document.body.classList.add("dark");
    searchField.classList.add("search-field-dark");
}

darkModeBtn.addEventListener("click", () => {
  if (darkModeBtn.checked) {
    document.body.classList.add("dark");
    moonImg.src = "../img/violet-moon.svg";
    searchField.classList.add("search-field-dark");
    localStorage.setItem("isDark", "true");
  } else {
    document.body.classList.remove("dark");
    moonImg.src = "../img/moon.svg";
    localStorage.setItem("isDark", "false");
  }
});

// function toggleDarkMode() {
//     let isDark = document.body.classList.toggle("change-background-color");
//     localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
// }

// document.addEventListener("DOMContentLoaded", () => {
//     if (localStorage.getItem("darkMode") === 'enabled') {
//         document.body.classList.add("change-background-color");
//         searchField.style.backgroundColor = "transparent";
//         inputWordValue.style.color = "white";
//         fontOption.forEach(element => {
//             element.style.backgroundColor = "white";
//             element.style.color = "#050505";
//         });
//         meaningText.forEach((element) => {
//             element.style.color = "white";
//         });
//     }
// });
