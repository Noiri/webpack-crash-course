import _ from 'lodash'
import './style.css'
import './style.scss'
import logo from './icon.jpeg'

function component() {
  const element = document.createElement('div');
  const array = ['foo', 'bor', 'fizz']
  element.innerHTML = _.join(array, '-')
  return element;
}

document.body.appendChild(component());
document.body.classList.add('background')

const image = new Image()
image.src = logo
document.body.appendChild(image);
