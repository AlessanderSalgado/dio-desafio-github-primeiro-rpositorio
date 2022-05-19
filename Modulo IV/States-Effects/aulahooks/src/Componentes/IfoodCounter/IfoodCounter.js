import React, {useState, useEffect} from 'react'
import '../IfoodCounter/IfoodCounter.css';
export default function IfoodCounter() {
    const [value, setValue] = useState(1);
    const [buttonStily, setButtonStily] = useState("counter-button-nimus-active")
    const [valueItem, setValueItem] = useState(0.00)
    
    useEffect(() => {
        document.getElementById("moeda").innerHTML = value * valueItem

    },[value])

    useEffect(() => {
        document.getElementById("moeda").innerHTML = value * valueItem
    },[valueItem])

    useEffect(() => {
        if(buttonStily === 'counter-button-nimus-desactive'){
            alert('Vc não pode diminuir para menos que 1')
        }
    },[buttonStily])

    function valueItemInput(){
        setValueItem(parseFloat(document.getElementById("value-item").value))    
    }

    function down(){
        if(value <=1){
            //mudar css
            setButtonStily("counter-button-nimus-desactive")
        }
        if(value === 1){
            //Na aula a inteção era desabilitar a função, mas so alteramos o css.
            //Implementei essa função para de fato paralizar o botao na qtd 1, pq nao faz sentido comprar 0 tb. kkkkkkk
            document.getElementById('down').disabled('true')
        }
        if(value > 0){
            setValue(value-1)
        }
    }
    function up(){
        setValue(value+1)
        setValueItem(document.getElementById("value-item").value)
        if(value <=1){
            //mudar css
            setButtonStily("counter-button-nimus-active")
            //Implementação para reativar o botão
            document.getElementById('down').disabled('false')
        }
    }
    return (
    <>
    <div className="countex-wrapper">
        <button 
            id='down'
            className={buttonStily}
            onClick={down}
            >
            -
        </button>
        <p>{value}</p>
        <button
            className="counter-button-plus-active"
            onClick={up}
            >
            +
        </button>
    </div>
    <div className="countex-wrapper-2">
        <label>Digite o valor do item:</label>
        <input className='input' id='value-item' type='number' onChange={valueItemInput} onClick={valueItemInput}></input>
        <label>Total a pagar:</label>
        <p id="moeda">{valueItem}</p>
    </div>
    </>
  )
}
