function teste (){
    const totalDeDias = 400;

    //const qtdAnos, qtdMeses, qtdDias;

    
    qtdAnos = parseInt(totalDeDias / 365);
    qtdMeses = parseInt((totalDeDias % 365) / 30);
    qtdDias = parseInt((totalDeDias % 365) % 30);


    const resultado = (qtdAnos + " ano(s) " + '\n' + qtdMeses +" mes(es)" + '\n' + qtdDias + " dia(s)");

    console.log(resultado)


}
teste()