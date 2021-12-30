import validator from './validator.js';
/* variable para traer los datos del input */
const btnTarjeta = document.getElementById("agregaTarjeta");

  btnTarjeta.addEventListener("click", () => {
  btnTarjeta.style.backgroundColor = '#4cae4c'
  let inputCardNumber = document.getElementById("cardNumber").value; 
  /*console.log(inputCardNumber.value)*/
  const result = validator.isValid(inputCardNumber);
  /*console.log(result)*/

  const numberhide = validator.maskify(inputCardNumber);
  
  if (result == true) {
    const mask = document.getElementById("cardNumber").value = numberhide

    document.getElementById("numFinal").innerHTML =
    ("Número de tarjeta válido " + mask)

  } else {
      const mask = document.getElementById("cardNumber").value = numberhide

      document.getElementById("numFinal").innerHTML =
      ("Número de la tarjeta inválido " + mask)
  }

})


