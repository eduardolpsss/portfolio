// Autor: Eduardo Pontes

const html = document.querySelector('html')

const getStyle = (element, style) =>
  window
  .getComputedStyle(element)
  .getPropertyValue(style)

const initialColors = {
  bg: getStyle(html, '--bg'),
  bgPanel: getStyle(html, '--bg-panel'),
  colorHeadings: getStyle(html, '--color-headings'),
  colorText: getStyle(html, '--color-text'),
  colorLamp: getStyle(html, '--colorLamp'),
  colorHr: getStyle(html, '--color-hr')
}

const lightMode = {
  bg: '#FCFCFC',
  bgPanel: '#FCFCFC',
  colorHeadings: '#0077FF',
  colorText: '#333333',
  colorLamp: '#3664FF',
  colorHr: 'rgba(51, 51, 51, 0.1)'
}

const transformKey = key =>
  '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

const changeColors = (colors) => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  )
}

const checkbox = document.querySelector('input[name=switch-theme]')

const checkboxColorMode = JSON.parse(localStorage.getItem('color-mode'))

if (checkboxColorMode) {
  checkbox.checked = checkboxColorMode
  changeColors(lightMode)
}

checkbox.addEventListener('change', ({
  target
}) => {
  target.checked ? changeColors(lightMode) : changeColors(initialColors)

  localStorage.setItem('color-mode', target.checked)
})