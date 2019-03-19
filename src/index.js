import _ from 'lodash'
import * as util from './utilities'

console.log(util.NAME);

function component() {
  const element = document.createElement('div');
  const array = ['foo', 'bor', 'fizz']
  element.innerHTML = _.join(array, '-')
  return element;
}

document.body.appendChild(component());
