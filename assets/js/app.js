
// Configure your article images here (JPGs placed under assets/images/)
const ARTICLES = [
  { src: 'assets/images/article-01.jpg', title: 'Article 01' },
  { src: 'assets/images/article-02.jpg', title: 'Article 02' },
  { src: 'assets/images/article-03.jpg', title: 'Article 03' },
  { src: 'assets/images/article-04.jpg', title: 'Article 04' },
  { src: 'assets/images/article-05.jpg', title: 'Article 05' },
  { src: 'assets/images/article-06.jpg', title: 'Article 06' },
];

function renderGallery() {
  const wrap = document.querySelector('#gallery');
  wrap.innerHTML = '';
  for (const item of ARTICLES) {
    const card = document.createElement('article');
    card.className = 'card';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = item.src;
    img.alt = item.title || 'Article image';
    img.addEventListener('click', () => openLightbox(item.src, item.title));
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = item.title || '';
    card.appendChild(img);
    card.appendChild(meta);
    wrap.appendChild(card);
  }
}
function openLightbox(src, title) {
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  lb.querySelector('img').src = src;
  lb.querySelector('img').alt = title || 'Image';
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  lb.querySelector('img').src = '';
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
document.addEventListener('DOMContentLoaded', () => {
  const v = document.querySelector('video#bgvid');
  if (v) {
    let ok = false;
    const markNoVideo = () => document.querySelector('.hero').classList.add('no-video');
    v.addEventListener('canplay', () => ok = true, { once: true });
    setTimeout(() => { if (!ok) markNoVideo(); }, 2500);
  }
  renderGallery();
});
