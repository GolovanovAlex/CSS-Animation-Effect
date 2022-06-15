document.addEventListener('mousemove', function (e) {
  let body = document.querySelector('body');
  let heart = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  body.appendChild(heart);
});
