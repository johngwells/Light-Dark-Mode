const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Refactor
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// refactor darkmode/lightmode Functions
function toggleDarkLightMode(toggle) {
  toggle ? nav.style.backgroundColor = 'rgb(0 0 0 / 50%)' : nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggle ? textBox.style.backgroundColor = 'rgb(255 255 255 / 50%' : textBox.style.backgroundColor = 'rgb(0 0 0 / 50%';
  toggle ? toggleIcon.children[0].textContent = 'Dark Mode' : toggleIcon.children[0].textContent = 'Light Mode';
  toggle ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  toggle ? imageMode('dark') : imageMode('light');
}

// Dark Mode Styles - Comment out refactor code
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%';
  // console.log(toggleIcon.children);
  toggleIcon.children[0].textContent = 'Dark Mode';
  // toggleIcon.children[1].classList.remove('fa-sun');
  // toggleIcon.children[1].classList.add('fa-moon');
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  // image1.src = 'img/undraw_proud_coder_dark.svg';
  // image2.src = 'img/undraw_feeling_proud_dark.svg';
  // image3.src = 'img/undraw_conceptual_idea_dark.svg';
  imageMode('dark')
}

function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(false);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}