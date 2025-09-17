
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const popup = document.getElementById('popup');
const close = document.querySelector('.popup__close');

document.querySelectorAll('.btn-yellow, .btn-red').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    popup.style.display = 'flex';
  });
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', e => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});