/** Footer */

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Brenda García Ortega ${thisYear}`;
copyright.style.fontSize = "15px" 
copyright.style.textAlign = 'right';
copyright.style.marginRight = '20px';
footer.appendChild(copyright);

/** Skills List*/

const skills = ["JavaScript", "HTML", "CSS", "Python", "Ruby", "C++", "R", "Adobe Creative Cloud"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
    }