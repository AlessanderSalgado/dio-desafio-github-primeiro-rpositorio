import {useState} from 'react';
function SmartCounter(){
    //retrona um valor
    //1 . variavel stateful
    //2 . função amarrada a essa variavel que atualiza esse valor
    const [quantity_i, upQuantity_i] = useState(0);
    return(
        <>
        <h1>{quantity_i}</h1>
        <p><button onClick={() => upQuantity_i(quantity_i + 1)}>Aumentar Inteligente</button></p>
        <p><button onClick={() => upQuantity_i(quantity_i - 1)}>Diminuir Inteligente</button></p>
        </>
    )
};
export default SmartCounter;