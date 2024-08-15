const containerSection = document.getElementById('container')
const containerSection = document.querySelector('#container')
const secondItems = document.querySelectorAll('second')
const thirdItemInOl = document.querySelector('ol .third');
const containerSection = document.querySelector('#container');

// Set the text content of the container section to "Hello!"
containerSection.textContent = 'Hello!';
// Select the div with a class of footer
const footerDiv = document.querySelector('.footer');

// Add the class "main" to the selected footer div
footerDiv.classList.add('main');
// Select the div with a class of footer
const footerDiv = document.querySelector('.footer');

// Remove the class "main" from the selected footer div
footerDiv.classList.remove('main');

// Create a new li element
const newLi = document.createElement('li');

// Now you have successfully created a new li element!

// Create a new li element
const newLi = document.createElement('li');

// Set the text content of the new li element to "four"
newLi.textContent = 'four';

// Create a new li element
const newLi = document.createElement('li');

// Set the text content of the new li element to "four"
newLi.textContent = 'four';

// Select the ul element
const ulElement = document.querySelector('ul');

// Append the new li element to the ul element
ulElement.appendChild(newLi);

// Select all the li elements inside the ol tag
const olListItems = document.querySelectorAll('ol li');

// Loop through each li element and set the background color to "green"
olListItems.forEach(li => {
    li.style.backgroundColor = 'green';
});

// Select the div element with the class "footer"
const footerDiv = document.querySelector('.footer');

// Remove the selected div element
footerDiv.remove();