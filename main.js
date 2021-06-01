const spanTxt = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = ['Pisanie...', 'maszynowe...', 'zakończone...', 'sukcesem! : )']
const time = 30;
let wordIndex = 0;
let letterIndex = -15;

const addLetter = () => {
    if (letterIndex >= 0) {
        if (letterIndex < txt[wordIndex].length) {
            spanTxt.textContent += txt[wordIndex][letterIndex]
        } else {
            wordIndex++
            if (wordIndex < txt.length) {
                return setTimeout(() => {
                    spanTxt.textContent = "";
                    letterIndex = 0;
                    addLetter();
                }, 1000)
            } else {
                return
            }
        }
    }
    letterIndex++
    setTimeout(addLetter, 60);
}
addLetter();

const changeCursor = () => {
    spanCursor.classList.toggle('active')
}
setInterval(changeCursor, 300)