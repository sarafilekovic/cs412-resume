/*
Name: Sara Filekovic
ID: 190302049
Course: CS412.1
Assignment: Project 3 - Javascript
Due date: 7th November, 2021
*/

/* adding an accordion content panel */
$(document).ready(function() {
  $('.accordion').on('click', '.acc-control', function(e) {
    e.preventDefault();
    $(this).next('.acc-panel').not(':animated').slideToggle();
  });
});

/* adding a jQuery animation to buttons */
$(".acc-control").click(function() {
  $(this).animate({width: '200px'});
}); 

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
  changeHeading();
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

/* changing the heading */
const myObject = {
  myColors: ["#203D84", "blue", "red"],
  newSize: "50px",
  newPadding: "20px"
};
const resume = document.getElementById('resume-h1');

function changeHeading() {
  resume.style.fontSize = myObject.newSize;
  resume.style.paddingBottom = myObject.newPadding;
  mySwitch();
}

function mySwitch() {
  switch(new Date().getDay()) {
    case 5:
      resume.style.color = myObject.myColors[2];
      break;
    default:
      resume.style.color = myObject.myColors[0];
  }
}

