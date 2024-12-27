const screen = document.getElementById("screen");

function buttonPressed(value) {
    const maxLength = screen.getAttribute("maxlength");

    if (screen.value.length < maxLength) {
        screen.value += value;
    }
}

function reset() {
    const screen = document.getElementById("screen");
    screen.value = "";
}

function deleteNumber() {
    screen.value = screen.value.slice(0, -1);
}
