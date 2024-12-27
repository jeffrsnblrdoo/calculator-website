const textarea = document.querySelector("textarea");
const buttons = document.querySelectorAll("button");
const numbers = document.getElementsByClassName("number");

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", buttonPressed);
}

function buttonPressed(number) {
    textarea.innerHTML = number;
}
