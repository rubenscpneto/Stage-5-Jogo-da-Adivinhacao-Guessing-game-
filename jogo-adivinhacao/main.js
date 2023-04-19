// Variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


// Events
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener('keydown', enterKeyReset)

// Functions
function handleTryClick(event) {
  event.preventDefault() // não faça o padrão

  let inputNumber = document.querySelector("#inputNumber")

   if((Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10)) {
    alert('Por favor, digite um número entre 0 a 10.')
    xAttempts--
  }

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector("h2")
    .innerText = `Acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterKeyReset(e) {
  if(e.key == "Enter" && screen1.classList.contains('hide')) {
    handleResetClick()
}
}