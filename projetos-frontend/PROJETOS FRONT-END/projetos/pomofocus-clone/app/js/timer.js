export default function Timer({ minutesDisplay, secondsDisplay, resetTimer }) {
  let timerOut

  const updateTimerDisplay = function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function addMinutes() {
    let minutes = Number(minutesDisplay.textContent)
    let minutesFiveAdded

    if (minutes <= 85) {
      minutesFiveAdded = Number(minutes + 5)
    } else {
      alert('O limite é de 90 min')
      return
    }
    updateTimerDisplay(minutesFiveAdded, secondsDisplay.textContent)
  }

  function decMinutes() {
    let minutes = Number(minutesDisplay.textContent)
    let minutesFiveDecr

    if (minutes > 5) {
      minutesFiveDecr = Number(minutes - 5)
    } else {
      return
    }

    updateTimerDisplay(String(minutesFiveDecr), secondsDisplay.textContent)
  }

  function countdown() {
    timerOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      updateTimerDisplay(minutes, 0)

      if (seconds <= 0) {
        seconds = 60
        minutes--
      }

      if (minutes < 0) {
        resetTimer()
        return false
      }

      updateTimerDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function reset() {
    updateTimerDisplay(25, 0)
    clearTimeout(timerOut)
  }

  function hold() {
    clearTimeout(timerOut)
    return false
  }

  return {
    updateTimerDisplay,
    addMinutes,
    decMinutes,
    hold,
    reset,
    countdown
  }
}
