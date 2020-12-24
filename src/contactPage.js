const contactPage = () => {
  const div = document.createElement('div');
  const divC = document.createElement('div');
  const h1 = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');

  h1.textContent = 'Contact Us-';
  p1.textContent = 'example@example.com';
  p2.textContent = '+911 9111 1111';
  p3.textContent = '221B Baker Street';

  h1.style.marginBottom = '.5em';

  divC.style.fontSize = '1.5em';
  divC.style.position = 'absolute';
  divC.style.padding = '2em';
  divC.appendChild(h1);
  divC.appendChild(p1);
  divC.appendChild(p2);
  divC.appendChild(p3);

  const img = document.createElement('img');
  img.src = './assests/contact.svg'

  div.appendChild(divC);
  div.appendChild(img);
  return div;
};

export { contactPage }