/* hamburger menu functionality when device screen < 768 px */
const navbar = document.getElementById('myNavbar');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-nav-btn');

hamburger.addEventListener('click', () => {
  navbar.style.display = 'flex';
  navbar.style.top = '0';
});

closeBtn.addEventListener('click', () => {
  navbar.style.top = '-100%';
});

/* 'about me' description animation */
const myDesc = document.getElementById('about-p');

function slideInFromRight() {
  myDesc.style.animation = 'slideInFromRight 0.5s ease 2s 1 forwards';
}

window.onload = function() {
  slideInFromRight();
  animateSkillsDiv();
}

/* changing the color of table headers on mouseover */
const tableHeaders = document.querySelectorAll('th.color-me');

function colorTableHeaders() {
  if(tableHeaders.length > 0) {
    for(let i = 0; i < tableHeaders.length; i++) {
      tableHeaders[i].className = 'color-me-again';
    }
  }
}

/* changing the text content of the 2nd interest item */
const interest = document.getElementById('changeMe');
let interestText = interest.firstChild.nextSibling.nodeValue;
interestText = interestText.replace('Algorithms', 'UX/UI design');
interest.firstChild.nextSibling.nodeValue = interestText;

/* linear gradient animation on 'skills' div */
const skillsDiv = document.getElementById('skills-list');

function animateSkillsDiv() {
  skillsDiv.style.animation = 'skillsAnimation 20s ease infinite';
}