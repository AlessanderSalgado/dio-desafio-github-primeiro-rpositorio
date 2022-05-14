function calc(){
    var arredonda = function(numero, casasDecimais) {
        casasDecimais = typeof casasDecimais !== 'undefined' ?  casasDecimais : 4;
        return +(Math.round(numero + ('e+' + casasDecimais)) + ('e-' + casasDecimais));
      };
    
    const PI = 3.14159;
    R = parseFloat(1523);
    R = (R*R*R)
    console.log(R)
    V = 4.0 * PI
    V = V * R
    V = arredonda((V / 3.0),3)
    VOLUME = "VOLUME"+" "+"="+" "+V

    console.log(VOLUME);



}
//calc()

function calc1(){
  var R = 3;
  var V = 20;

  // Complete os espaços em branco com uma possível solução para o problema

  while(true){
    if(V > R){
      break
    }
    console.log('Esperando V ser Maior que R')
  }
  console.log('Estou aqui')
  let cont = 1;
  let it = 1;
  var Ratual = 0
  var Rfim = 0
  while(true){
    if(cont == 1){
      Ratual = R + 1
      Rfim = Ratual + R
    }
    if(cont >= 2){
      Ratual = Ratual + 1
      Rfim = Rfim + Ratual
    }
    cont++
    if(Rfim >= V){
      console.log(cont)
      break;
    }
  }
}
//calc1()
let prompt = require('prompt-sync')();
function calc2(){
  var totalItems = prompt('N: ')
  let pares = [];
  let impares = [];

  for (let i = 0; i <totalItems; i++) {
    let number = parseInt(prompt('N inteiros: '));
    if (number%2==0){
      pares.push(number);
    }
    else {
      impares.push(number);
    }
  }
  pares.sort((a, b) => {return a - b})
  impares.sort((a, b) => {return b - a})
  pares.map((pares) => {return console.log(pares)});
  impares.map((impares) => {return console.log(impares)});
}
calc2()