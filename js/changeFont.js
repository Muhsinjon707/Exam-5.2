const fontOne = document.querySelector('.font-1');
const fontTwo = document.querySelector('.font-2');
const fontThree = document.querySelector('.font-3');

const everything = document.querySelectorAll("body *");
const fonts = document.querySelectorAll("#fonts");

const defaultFont = document.querySelector(".default-font");

for(let i = 0; i < fonts.length; i++) {
    fonts[i].addEventListener('click', (e) => {
        let t = e.target.attributes.value.value;

        // everything.forEach(value => {
        //     value.style.fontFamily = e.target.attributes.value.value;
        // })

        if (document.body.classList.contains("dark")) {
            document.body.classList.remove(...document.body.classList);
            document.body.classList.add(t);
            document.body.classList.add("dark");
        } else {
            document.body.classList.add(t);
        }

        defaultFont.textContent = t;
        defaultFont.textContent = fonts[i].textContent;
        // localStorage.setItem("textContent", fonts[i].textContent);
        // localStorage.setItem("fontFamily", t);
    })
}

// const currentFont = localStorage.getItem("fontFamily");
// const textContent = localStorage.getItem("textContent");

// if (currentFont) {
//     document.body.style.fontFamily = currentFont;
//     document.querySelectorAll("body *").forEach(value => {
//         value.style.fontFamily = currentFont;
//     })
//     defaultFont.textContent = textContent;
// }