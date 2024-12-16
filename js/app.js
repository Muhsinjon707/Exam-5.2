import { createMessage, validate } from "./functions.js";

const searchBtn = document.querySelector("#search");
const searchContent = document.querySelector(".search-content");

function getData() {
  let data = [];

  if (localStorage.getItem("wordData")) {
    data = JSON.parse(localStorage.getItem("wordData"));
  }

  return data;
}

function notFound1() {
  return `
        <div class="notFoundMessage">
          <div class="error-mistake">
            <p class="emoji">😕</p>
            <h2 class="missing">No Definitions Found</h2>
            <p class="message">
              Sorry pal, we couldn't find definitions for the word you were
              looking for. You can try the search again at later time or head to
              the web instead.
            </p>
          </div>
        </div>
    `;
}

const notFound = document.querySelector(".notFoundMessage");

async function findWordMeaning(word) {
  try {
    const isValid = validate(word);
    if (!isValid) {
      return;
    }

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.status == 404) {
      console.log("word doesn't exist");
      searchContent.innerHTML = notFound1();
      return;
    }

    let newData = createMessage(data[0]);
    searchContent.innerHTML = newData;

    localStorage.setItem("wordData", JSON.stringify(data[0]));
  } catch (error) {
    console.error(error);
  }
}

searchBtn.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    findWordMeaning(searchBtn);
  }
});

searchBtn.addEventListener("click", () => {
  findWordMeaning(searchBtn);
});

document.addEventListener("DOMContentLoaded", () => {
  let data = getData();
  let newData = createMessage(data);
  searchContent.innerHTML = newData;

  const audioBtn = document.querySelector("#audioBtn");
  const audio = document.querySelector("#audio");

  audioBtn &&
    audioBtn.addEventListener("click", () => {
      if (audio.src !== "") {
        audio.play();
      }
    });
});
