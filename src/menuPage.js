const menuPage = () => {
  const h1 = document.createElement('h2');
  h1.textContent = 'Check Our menu';
  h1.style.margin = '1em';
  h1.style.textAlign = 'center';

  const divCC = document.createElement('div');
  const divC1 = document.createElement('div');
  const divC2 = document.createElement('div');
  const divC3 = document.createElement('div');
  const img1 = document.createElement('img');
  const p1 = document.createElement('p');
  p1.textContent = 'lorem ipsum';
  p1.style.textAlign = 'center';
  img1.src = './assests/bg.jpeg';
  img1.style.width = '50%';
  img1.style.display = 'block';
  img1.style.margin = 'auto';
  const img2 = document.createElement('img');
  const p2 = document.createElement('p');
  p2.textContent = 'lorem ipsum';
  p2.style.textAlign = 'center';
  img2.src = './assests/bg.jpeg';
  img2.style.width = '50%';
  img2.style.display = 'block';
  img2.style.margin = 'auto';
  const img3 = document.createElement('img');
  const p3 = document.createElement('p');
  p3.textContent = 'lorem ipsum';
  p3.style.textAlign = 'center';
  img3.src = './assests/bg.jpeg';
  img3.style.width = '50%';
  img3.style.display = 'block';
  img3.style.margin = 'auto';
  divC1.appendChild(img1);
  divC1.appendChild(p1);
  divC2.appendChild(img2);
  divC2.appendChild(p2);
  divC3.appendChild(img3);
  divC3.appendChild(p3);

  divCC.appendChild(divC1);
  divCC.appendChild(divC2);
  divCC.appendChild(divC3);

  const div = document.createElement('div');
  div.appendChild(h1);
  div.appendChild(divCC);
  return div;
};

export { menuPage }