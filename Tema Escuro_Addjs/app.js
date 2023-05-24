const temaToggle = document.getElementById('tema-toggle-checkbox');
const body = document.body;

temaToggle.addEventListener('change', () => {
  if (temaToggle.checked) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
});
