const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

function createThumbnail(src) {
  const thumbnail = document.createElement('img');
  thumbnail.src = src;
  return thumbnail;
}

function thumbnailLoop() {
  for (let i = 1; i <= 5; i++) {
    const src = `images/pic${i}.jpg`;
    const newImage = createThumbnail(src);
    thumbBar.appendChild(newImage);
  }
}

thumbnailLoop();

thumbBar.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    displayedImage.src = e.target.src;
  }
});

btn.addEventListener('click', (e) => {
  if (btn.classList.contains('dark')) {
    btn.classList.replace('dark', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.classList.replace('light', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});