// The code has many snipets inspired from https://mega.nz/folder/mcFR2Yya#HLabokFeyZci7eqKQaQ1wg

const wordE1 = document.getElementById('word');
const wrongLettersE1 = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const notification2 = document.getElementById('notification2-container');
const finalMessage = document.getElementById('final-message');
const figureParts= document.querySelectorAll(".figure-part");
const words = ['aberrant', 'assiduous', 'restaurateur', 'corroborate', 'curriculum', 'defamation', 'deprivation', 'dissociate', 'espionage', 'exaggeration', 'diurnal', 'distinction', 'programming', 'practical', 'software', 'development', 'modernism', 'situationist', 'syndrome', 'jawbreaker'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const maxWrong = 6;
const correctLetters = [];
const wrongLetters = [];

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

    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You won! 😃';
        popup.style.display= 'flex';
        correctWords();
    }
}

// Update the wrong letters
function updateWrongLetterE1(){
    //Display wrong letters
    wrongLettersE1.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    //Display parts
    figureParts.forEach((part,index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block'
        }
        else{
            part.style.display = 'none';
        }
    });

    //Check if lost
    if(wrongLetters.length === figureParts.length){
        finalMessage.innerText = 'Unfortunately you lost. 😕';
        popup.style.display = 'flex';
        incorrectWords();
    }
}

//Show notification for hitting twice the same wrong letter
function showNotification(){
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

//Show notification for hitting a character outside of letter

function showNotification2() {
    notification2.classList.add('show');

    setTimeout(() => {
        notification2.classList.remove('show');
    }, 2000);
}

//Keydown letter press, from 65 to 90, the strokes indexes for all the letters of the alphabet 
window.addEventListener('keydown', e =>{
    if(e.keyCode >= 65 && e.keyCode <=90){
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

                updateWrongLetterE1();

                countLives();
            } else{
                showNotification();
            }
        } 
    } else{
        showNotification2();
    }
}
);

function correctWords() {

	// Gets the current score from the DOM and increments it

	let oldScore1 = parseInt(document.getElementById("score").innerText);
	document.getElementById("score").innerText = ++oldScore1;

}

function incorrectWords() {

	// Gets the current tally of incorrect answers from the DOM and increments it

	let oldScore2 = parseInt(document.getElementById("incorrect").innerText);
	document.getElementById("incorrect").innerText = ++oldScore2;

}

// Gets the number of remaining tries shown the maximum number being "6"

function countLives() {
    let oldScore3 = parseInt(document.getElementById("lives").innerText);
	document.getElementById("lives").innerText = oldScore3 -= 1;
} 

//Restart game and play again
playAgainBtn.addEventListener('click', () => {
    //Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLetterE1();

    document.getElementById('lives').innerHTML = maxWrong;

    popup.style.display = 'none';
});

displayWord();


