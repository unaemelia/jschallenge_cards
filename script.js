let inputField = document.getElementById("chosen_word");
let emptyWord = document.getElementById("empty1");

function submit() {
    if (inputField.value == "") {
        emptyWord.innerHTML = "_______";
    }
    else {
        emptyWord.innerHTML = inputField.value;
    }
}

function reset() {
    inputField.value = "";
    emptyWord.innerHTML = "_______";
}

reset();