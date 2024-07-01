// Selectors
const navLinks = document.querySelectorAll('nav a');
const heroButton = document.querySelector('.hero button');
const featuresList = document.querySelector('.features ul');
const callToActionButton = document.querySelector('.call-to-action button');

// Add event listeners
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Toggle active class on nav links
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

heroButton.addEventListener('click', () => {
  // Scroll to features section
  document.querySelector('.features').scrollIntoView({ behavior: 'mooth' });
});

featuresList.addEventListener('click', event => {
  // Toggle active class on list items
  if (event.target.tagName === 'LI') {
    featuresList.querySelectorAll('li').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  }
});

callToActionButton.addEventListener('click', () => {
  // Scroll to top of page
  window.scrollTo({ top: 0, behavior: 'mooth' });
});

// Initialize active class on first nav link
navLinks[0].classList.add('active');
