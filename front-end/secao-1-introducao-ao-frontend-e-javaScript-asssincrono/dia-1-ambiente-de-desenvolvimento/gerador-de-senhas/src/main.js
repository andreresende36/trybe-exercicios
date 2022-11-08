import { nanoid } from 'nanoid'
import './style.css'

console.log(nanoid())

const button = document.querySelector('button')
const display = document.querySelector('h2')

button.addEventListener('click', () => {
  const randomPasswrd = nanoid()
  display.innerHTML = randomPasswrd
})
