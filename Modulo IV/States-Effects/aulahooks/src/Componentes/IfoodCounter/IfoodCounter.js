import React, {useState} from 'react'
import '../IfoodCounter/IfoodCounter.css';
export default function IfoodCounter() {
    const [value, setValue] = useState(1);
    const [buttonStily, setButtonStily] = useState("counter-button-nimus-active")

    function down(){
        if(value <=1){
            //mudar css
            setButtonStily("counter-button-nimus-desactive")
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
        if(value <=1){
            //mudar css
            setButtonStily("counter-button-nimus-active")
            //Implementação para reativar o botão
            document.getElementById('down').disabled('false')
        }
    }
    
    return (
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
  )
}
