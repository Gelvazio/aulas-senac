import ToggleTheme from './toggleTheme.js'
import Controls from './controls.js'
import Timer from './timer.js'

let lgtThemeBtn = document.querySelector('.theme-btn.lgt-theme-btn')
let drkThemeBtn = document.querySelector('.theme-btn.drk-theme-btn')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPause = document.querySelector('.pause')
const buttonAddMinutes = document.querySelector('.add-minutes')
const buttonDecMinutes = document.querySelector('.dec-minutes')

const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')

const bodyDocument = document.querySelector('body')
const theme = ToggleTheme({ lgtThemeBtn, drkThemeBtn, bodyDocument })

const controls = Controls({
  buttonPlay,
  buttonPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetTimer: controls.stop
})

lgtThemeBtn.addEventListener('click', () => {
  theme.changeToLightTheme()
})

drkThemeBtn.addEventListener('click', () => {
  theme.changeToDarkTheme()
})

buttonPlay.addEventListener('click', () => {
  controls.play()
  timer.countdown()
})

buttonStop.addEventListener('click', () => {
  controls.stop()
  timer.reset()
})

buttonPause.addEventListener('click', () => {
  controls.pause()
  timer.hold()
})

buttonAddMinutes.addEventListener('click', () => {
  timer.addMinutes()
})

buttonDecMinutes.addEventListener('click', () => {
  timer.decMinutes()
})

//card actions

const forestCard = document.querySelector('.florest-sound')
const rainCard = document.querySelector('.rain-sound')
const voicesCard = document.querySelector('.voices-sound')
const firepitCard = document.querySelector('.firepit-sound')

const forest = new Audio('./app/assets/sounds/floresta.wav')
const rain = new Audio('./app/assets/sounds/chuva.wav')
const starbucks = new Audio('./app/assets/sounds/cafeteria.wav')
const fire = new Audio('./app/assets/sounds/lareira.wav')

forestCard.addEventListener('click', () => {
  forestCard.classList.toggle('active')

  let activeCardIsTrue =
    forestCard.classList.value == `card-sound florest-sound active`
      ? forest.play().loop
      : forest.pause()
})

rainCard.addEventListener('click', () => {
  rainCard.classList.toggle('active')

  let activeCardIsTrue =
    rainCard.classList.value == `card-sound rain-sound active`
      ? rain.play().loop
      : rain.pause().loop
})

voicesCard.addEventListener('click', () => {
  voicesCard.classList.toggle('active')

  let activeCardIsTrue =
    voicesCard.classList.value == `card-sound voices-sound active`
      ? starbucks.play().loop
      : starbucks.pause().loop
})

firepitCard.addEventListener('click', () => {
  firepitCard.classList.toggle('active')

  let activeCardIsTrue =
    firepitCard.classList.value == `card-sound firepit-sound active`
      ? fire.play().loop
      : fire.pause().loop
})
