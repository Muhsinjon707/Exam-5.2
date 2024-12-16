function checkForNumber(str) {
    for (let letter of str) {
      if (Number(letter)) {
        return false;
      }
    }
    return true;
}

function validate(word) {
    if (!checkForNumber(word.value)) {
        word.focus();
        word.style.outlineColor = `#FF5252`;
        return false;
    }

    if (word.value == "") {
        word.focus();
        word.style.outlineColor = `#FF5252`;
        return false;
    }

    return true;
}

function loopDefinitions(data) {
    let definitions = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].example) {
            definitions += `
                <li>
                    <span id="meaning-text">${data[i].definition}<span>
                    <span class="inner-meaning">${(data[i].example)}<span>
                </li>
            `
        } else {
            definitions += `
                <li>
                    <span id="meaning-text">${data[i].definition}<span>
                </li>
            `;
        }
    }
    return definitions;
}

function checkForSynonym(data) {
    let syn = "";
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        
        if (data[0].synonyms.length > 0) {
            syn += `
                <span class="caption-color">
                    ${data[i].synonyms}
                <span>
            `;
        } else {
            syn += `<span class="caption-color">Nope<span>`;
        }
    }
    return syn;
}

function loopMeanings(data) {
    let meanings = '';
    for (let i = 0; i < data.length; i++) {
        meanings += `
            <div class="horizontal-line">
                <span class="line-left">${data[i].partOfSpeech}</span>
                <hr class="line-right">
            </div>

            <div class="meaning">
                <div class="caption">Meaning</div>
                <ul class="meaning-list">
                    ${loopDefinitions(data[i].definitions)}
                </ul>
                <div class="caption">
                    Synonyms 
                    <div class="caption-container">
                        <span class="synonym-word">
                            ${checkForSynonym(data)}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }
    return meanings;
}

function loopPhonetics(data) {
    let dataNew;
    for (let i = 0; i < data.length; i++) { 
        if (data[i].audio) {
            dataNew = `
                <audio id="audio" src="${data[i].audio}"></audio>
                <button id="audioBtn"></button>
            `;
        } 
    }

    return dataNew;
}

function createMessage(data) {
    return `
        <div class="above">
            <div class="word">
                <div class="word-name">${data.word}</div>
                <div class="word-spelling">${data.phonetic}</div>
            </div>
            <div class="play-button">
                ${loopPhonetics(data.phonetics)}
            </div>
        </div>

        ${loopMeanings(data.meanings)}

        <div class="footer">
            Source <span>
                <a class="source-link" href="${
                  data.sourceUrls
                }" target="_blank">${data.sourceUrls}</a>
                <img src=".//img/tabler_external-link.svg" alt="">
            </span>
        </div>  
    `;
}

export {createMessage, validate}