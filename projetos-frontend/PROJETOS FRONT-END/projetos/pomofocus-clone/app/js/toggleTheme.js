export default function ToggleTheme({
  lgtThemeBtn,
  drkThemeBtn,
  bodyDocument
}) {
  function changeToLightTheme() {
    bodyDocument.classList.toggle('drk-theme')
    bodyDocument.classList.toggle('lgt-theme')
    lgtThemeBtn.classList.add('hide')
    drkThemeBtn.classList.remove('hide')
  }

  function changeToDarkTheme() {
    bodyDocument.classList.toggle('drk-theme')
    bodyDocument.classList.toggle('lgt-theme')
    drkThemeBtn.classList.add('hide')
    lgtThemeBtn.classList.remove('hide')
  }

  return {
    changeToDarkTheme,
    changeToLightTheme
  }
}
