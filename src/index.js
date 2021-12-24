import validator from './validator.js';

console.log(validator);
/* variable para traer los datos del input */
let btnTarjeta = document.querySelector('#agregaTarjeta');

  btnTarjeta.addEventListener('click', () => {
  btnTarjeta.style.backgroundColor = '#4cae4c'
  let inputCardNumber = document.querySelector('#cardNumber').value; /* Va a buscar el input con el valor */
  /*console.log(inputCardNumber.value)*/
  const result = validator.isValid(inputCardNumber)
  console.log(result)

  })
  

