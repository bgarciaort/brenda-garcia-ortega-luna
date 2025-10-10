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
    };

/** Message Box*/

const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', function(event){
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log('Your name:', usersName)
    console.log('Your email:', usersEmail);
    console.log('Your message:', usersMessage);
  
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
   
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>${usersMessage}</span>`;

const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.type = 'button';

removeButton.addEventListener('click', function(event) {
    const entry = event. target.parentNode; 
    entry.remove();
});
newMessage.appendChild(removeButton); 
messageList.appendChild(newMessage);  
event.target.reset();
});