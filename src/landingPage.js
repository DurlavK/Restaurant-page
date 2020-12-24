const landingPage = () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome';
  h1.style.position = 'absolute';
  h1.style.top = '40vh';
  h1.style.left = '40vw';
  h1.style.fontSize = '3em';
  h1.style.color = 'brown';
  h1.style.zIndex = 10;

  const img = document.createElement('img');
  img.src = './assests/bg.jpeg';
  img.alt = "image not here";
  img.style.opacity = 0.75;

  const p =document.createElement('p');
  p.textContent = 'this is lorem ipsum';

  const div = document.createElement('div');
  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(p);
  
  return div;
};


export { landingPage }