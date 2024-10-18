// Aufgabe 1: Textinhalt des h2-Elements ändern
document.getElementById('willkommenBruder').textContent = "Herzlich Willkommen!";

// Aufgabe 2: Zufällige Hintergrundfarbe ändern
document.getElementById('change-color').addEventListener('click', function() {
  this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

// Aufgabe 3: Ändere den Text des zweiten Listenelements
document.getElementsByTagName('li')[1].textContent = "Mango";

// Aufgabe 4: Dynamisch ein neues <p>-Element hinzufügen
let newParagraph = document.createElement('p');
newParagraph.textContent = "Dies ist ein neuer Absatz";
document.getElementById('box').appendChild(newParagraph);

// Aufgabe 5: Button klick Event hinzufügen
document.getElementById('click-me').addEventListener('click', function() {
  let newParagraph = document.createElement('p');
  newParagraph.textContent = "Button wurde geklickt!";
  this.parentNode.appendChild(newParagraph);
});

// Aufgabe 6: Farbwechsel bei Hover über der Box
let box = document.querySelector('.box');
box.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
box.addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
});

// Aufgabe 7: Eingabewert auslesen und anzeigen
document.getElementById('submit').addEventListener('click', function() {
  let inputValue = document.getElementById('user-input').value;
  let newParagraph = document.createElement('p');
  newParagraph.textContent = inputValue;
  this.parentNode.appendChild(newParagraph);
});

// Aufgabe 8: Alle Boxen auf Blau ändern
let boxes = document.getElementsByClassName('box');
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function() {
    for (let j = 0; j < boxes.length; j++) {
      boxes[j].style.backgroundColor = 'blue';
    }
  });
}

// Aufgabe 9: Neues Listenelement vor Item 1 einfügen
let newItem = document.createElement('li');
newItem.textContent = 'Neues Item';
let list = document.querySelector('ul');
list.insertBefore(newItem, list.firstChild);

// Aufgabe 10: Zufällige Zahl raten
document.getElementById('check').addEventListener('click', function() {
  let userGuess = parseInt(document.getElementById('guess').value);
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let result = document.getElementById('result');
  
  if (userGuess === randomNumber) {
    result.textContent = 'Richtig geraten!';
  } else {
    result.textContent = 'Falsch geraten, die richtige Zahl war ' + randomNumber;
  }
});
