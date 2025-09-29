// for (let i = 0; i < 16; i++) {
//   const b = document.createElement('div');
//   b.className = 'balloon';
//   b.style.left = (Math.random() * 100) + '%';
//   b.style.animationDuration = (14 + Math.random() * 12) + 's';
//   b.style.background = `radial-gradient(circle at 30% 30%, rgba(255,255,255,.6), transparent 45%), ${colors[i % colors.length]}`;
//   // add random string length
//   b.style.setProperty('--string-length', (50 + Math.random() * 40) + 'px');
//   balloonRoot.appendChild(b);
// }

for (let i = 0; i < 16; i++) {
  const b = document.createElement('div');
  b.className = 'balloon';
  b.style.left = (Math.random() * 100) + '%';
  b.style.animationDuration = (14 + Math.random() * 12) + 's';
  b.style.background = `radial-gradient(circle at 30% 30%, rgba(255,255,255,.6), transparent 45%), ${colors[i % colors.length]}`;
  
  // random string length (looks natural)
  b.style.setProperty('--string-length', (50 + Math.random() * 40) + 'px');
  
  balloonRoot.appendChild(b);
}
for (let i = 0; i < 16; i++) {
  // create wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'balloon-wrapper';
  wrapper.style.left = (Math.random() * 100) + '%';
  wrapper.style.animationDuration = (14 + Math.random() * 12) + 's';

  // create balloon
  const b = document.createElement('div');
  b.className = 'balloon';
  b.style.background = `radial-gradient(circle at 30% 30%, rgba(255,255,255,.6), transparent 45%), ${colors[i % colors.length]}`;
  
  // set random string length
  b.style.setProperty('--string-length', (50 + Math.random() * 40) + 'px');

  wrapper.appendChild(b);
  balloonRoot.appendChild(wrapper);
}
