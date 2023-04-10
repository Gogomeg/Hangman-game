const wordE1 = document.getElementById('word');
const wrongLettersE1 = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('pupup-container');
const notification = document.getElementById('notification-container');
const finalMESSAGE = document.getElementById('final-message');
const words = ['aberrant', 'assiduous', 'restaurateur', 'corroborate', 'curriculum', 'defamation', 'deprivation', 'dissociate', 'espionage', 'exaggeration', 'diurnal', 'distinction', 'programming', 'practical', 'software', 'development', 'modernism', 'situationist', 'syndrome', 'jawbreaker'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

const foundWords = [];
const notfoundWords = [];


//Show hidden word

function displayWord(){
    wordE1.innerHTML = `
    ${selectedWord
    .split('')
    .map(
        letter =>`
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `
    )
    .join('')}
    `;

    const innerWord = wordE1.innerText.replace(/\n/g, '');

    if(innerWord === selecteWord){
        finalMessage.innerText = 'Congratulation! You won!';
        popup.style.display= 'flex';
        incrementFound();
    }
}

// Update the word letters
function updateWrongletterE1(){
    //Dispaly wrong letters
    wrongLettersE1.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    //Display parts
    fugureParts.forEach((part,index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block';
        }
        else{
            part.style.display = 'none';
        }
    });

    //Check if lost
    if(wrongLetters.length === figureParts.length){
        finalMessage.innerHTML = 'Unfortunaley you lost.';
        popup.style.display = 'flex';
        incrementNotfound();
    }
}

//Show notification
function showNotification(){
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

//Keydown letter press
window.addEventListener('keydown', e =>{
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();
            } else{
                showNotification();
            }
        } else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);

                updateWrongLettersE1();
            } else{
                showNotification();
            }
        }
    }
});

// Gets the current score from the DOM and increments it

function incrementFound() {
    letoldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText =++ oldScore;
}

//Gets the current tally of incorrect answers from the DOM and increments it

function incrementNotfound() {
    letoldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText =++ oldScore; 
}


//Restart game and play again

playAgainBtn.addEventListener('click', () => {
    //Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];
    
    displayWord();

    updateWrongletterE1();

    popup.style.display = 'none';
});

displayWord();

