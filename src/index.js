import _ from 'lodash'

function component() {
  const element = document.createElement('div');
  const array = ['foo', 'bor', 'fizz']
  element.innerHTML = _.join(array, '-')
  return element;
}

document.body.appendChild(component());
