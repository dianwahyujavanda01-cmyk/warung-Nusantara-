window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 300);
});


