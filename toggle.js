// Theme toggling:
let isLight = false;

document.querySelector('.themetoggle').addEventListener('click', event => {
  event.preventDefault();

  toggleTheme();
});


function toggleTheme() {
  const elementsToToggle = document.getElementsByClassName('togglable');
  const toggler = document.querySelector('.toggler span');
  isLight = !isLight;

  try {
    toggler.textContent = isLight ? 'dark_mode' : 'wb_sunny';
    for (let element of elementsToToggle) {
      element.classList.toggle('light');
    }
  } catch (error) {
    console.error(error);
  }
}