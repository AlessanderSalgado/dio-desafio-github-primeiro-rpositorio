function calc(){
    var arredonda = function(numero, casasDecimais) {
        casasDecimais = typeof casasDecimais !== 'undefined' ?  casasDecimais : 4;
        return +(Math.round(numero + ('e+' + casasDecimais)) + ('e-' + casasDecimais));
      };
    
    const PI = 3.14159;
    R = 15;
    V = (4.0/3.0)
    R = (R*R*R)
    VOLUME = arredonda((V * PI * R),3)
    VOLUME = "VOLUME"+" "+"="+" "+VOLUME

    console.log(VOLUME);



}
calc()