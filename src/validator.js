const validator = {
  // crear metodo o funcion para validar listo
  // convertir en array el string listo
  // convertir a numero las posiciones listooo
  // girar el array listo
  // recorrer array listo
  // buscar posiciones pares listo
  // multiplicar posiciones pares listo
  // ver resultado si es mas de 9 sumar ambos digitos listo
  // guardar tambien en algun lugar los numeros de las posiciones impares
  // sumar todos los numero
  // buscar % de 10
  "isValid": function(cardNumber) {
  /*console.log("hola")*/
  let arrayValidation = cardNumber.split('').reverse().map(Number);
  /*console.log(arrayValidation);*/
  let total = 0
  for (let i = 0; i < arrayValidation.length; i++) {
    if (i % 2 === 1) {
      /*console.log(i) /*posición*/
      /*console.log(arrayValidation[i]) /*el número en la posición*/
      /*console.log(arrayValidation[i]*2) /*el número en la posición par *2 */
      /*variable para multiplicar la posición par *2 */
      let doublenum = arrayValidation[i] * 2
      /*console.log(doublenum)*/
      if (doublenum >= 10) {
        let sum = doublenum - 9
        total += sum
        /*console.log(total)*/
      } else {
        total += doublenum;
      }
    
    } else {
      total += arrayValidation [i];
      
    }
  } 
  /*console.log(total)*/
  let result = total % 10
  if (result == 0) {
    return true
  } else {
    return false
  }
},

"maskify": function(hideNum) {
  let num = hideNum.length;
  /* si el num es >= 4 se esconden los últimos 4 dígitos y se enmascaran con hideNum*/
  if (num <= 4) {
    return hideNum
     /*De lo contrario, variable cardNumb será igual al arreglo de hideNum */
  } else {
    let cardNum = hideNum.split('')
    for (let i = 0; i < hideNum.length - 4; i++) {
      cardNum[i] = "#"
    }
    let numFinal = cardNum.join('')
    return numFinal
  }
 
  /*console.log(hideNum)*/
}

}


export default validator; 
