// Assuming you have a way to determine the current page or selected tab
const currentTab = 'contact-me'; // Replace with the actual current tab

const navLinks = document.querySelectorAll('nav li a');

navLinks.forEach(link => {
  if (link.href.endsWith('#' + currentTab)) {
    link.classList.add('active');
  }
});