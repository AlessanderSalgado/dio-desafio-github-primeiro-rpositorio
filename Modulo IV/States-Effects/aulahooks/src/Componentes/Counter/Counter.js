function Counter(){
    let quantity = 0;
    function upQuantity(){
        quantity = quantity + 1;
        document.getElementById('counter-box').innerHTML = quantity;
        console.log(quantity);
    };
    function dowQuantity(){
        quantity = quantity - 1;
        document.getElementById('counter-box').innerHTML = quantity;
        console.log(quantity);
    };
    return(
        <>
        <h1 id="counter-box">{quantity}</h1>
        <p><button onClick={upQuantity}>Aumentar Burro</button></p>
        <p><button onClick={dowQuantity}>Diminuir Burro</button></p>
        </>
    )
};

export default Counter;