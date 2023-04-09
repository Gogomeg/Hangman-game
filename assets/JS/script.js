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




