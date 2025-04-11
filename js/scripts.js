//localido el padre de los elementos que le he dado un id
const iconsElement = document.getElementById('icons');
//counters
const resultPcElement = document.getElementById('resultPc');
const resultUserElement = document.getElementById('resultUser');
//guardo en un array las opciones que tiene el user y el pc
const pcOptions = ['scissors', 'paper', 'rock'];
//guardo una variable para la eleccion del user
let userChoice;
//variable para la eleccion del pc
let pcChoice;
//variable para mostrar en el contador de user
let counterUser = 0;
//variable para mostrar en el contador de pc
let counterPc = 0;

const updateScore = () => {
  resultUserElement.textContent = counterUser;
  resultPcElement.textContent = counterPc;
};

const checkPlay = () => {
  if (userChoice === pcChoice) {
    //  resultTextElement.textContent = 'EMPATE';
    //  return;
  }

  console.log(userChoice, pcChoice);
  updateScore();
};

const getPcOptions = () => {
  const randomPosition = Math.floor(Math.random() * pcOptions.length);
  pcChoice = pcOptions[randomPosition];
  checkPlay();
};

const getUserOption = event => {
  userChoice = event.target.dataset.icon; // y ya

  console.log(event.target.dataset.icon); // pillo el dato con el data y . el nombre que le haya dado
  getPcOptions();
};

iconsElement.addEventListener('click', getUserOption);
iconsElement.addEventListener('click', pcChoice);
