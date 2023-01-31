const number =document.getElementById("number")
const btnEl = document.getElementById("btn-el")
let count = 0
btnEl.addEventListener("click", myfunction())
function myfunction() {
    ADD()
    RESET()
    SUBTRACT()
}
function ADD() {
    for (let i = 0; i < 1; i++) {
        count++
        number.innerHTML = count
        number.style.color ="green"
    }
}
function RESET() {
    for (let i = 0; i < 1; i++) {
        count = 0
        number.innerHTML = count
        number.style.color ="blue"
    }
}
function SUBTRACT() {
    for (let i = 0; i < 1; i++) {
        count--
        number.innerHTML = count
        number.style.color ="red"
    }
}