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



