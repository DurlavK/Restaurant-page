import _ from 'lodash';

import {landingPage} from './landingPage';
import {menuPage} from './menuPage';
import {contactPage} from './contactPage';

function component() {
  const element = document.createElement('div');

  const div = document.createElement('div');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  div.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  li1.classList.add('link');
  li2.classList.add('link');
  li3.classList.add('link');
  li1.textContent = 'Home';
  li2.textContent = 'Menu';
  li3.textContent = 'Contact';

  li1.onclick = () => {
    while (element.childElementCount == 2) {
      element.removeChild(element.lastElementChild);
    }
    element.appendChild(landingPage());
  }
  li2.onclick = () => {
    while (element.childElementCount == 2) {
      element.removeChild(element.lastElementChild);
    }
    element.appendChild(menuPage());
  }
  li3.onclick = () => {
    while (element.childElementCount == 2) {
      element.removeChild(element.lastElementChild);
    }
    element.appendChild(contactPage());
  }

  element.appendChild(div);
  element.appendChild(landingPage());

  return element;
}

document.body.appendChild(component());