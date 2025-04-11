//localido el padre de los elementos que le he dado un id
const iconsElement = document.getElementById('icons');

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

const getPcOptions = () => {};

const getUserOption = event => {
  userChoice = event.target.dataset.icon; // y ya

  console.log(event.target.dataset.icon); // pillo el dato con el data y . el nombre que le haya dado
};

iconsElement.addEventListener('click', getUserOption);
iconsElement.addEventListener('click', pcChoice);
