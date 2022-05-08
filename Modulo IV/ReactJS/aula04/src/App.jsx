import React from 'react';
import Button from './Button';

const buttonA = <button>Historico de clientes</button>
const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true
const App = () => {
    const renderShowHistory = (
        <div>
            Clice no botao para visualizar o Historico:<br />
            {buttonA}
        </div>
    )
    const renderAddCustomer = (
        <div>
            Clique para cadastrar o cliente: <br />
            {buttonB}
        </div>
    )
    
        const customer = 'Alessander Salgado'

        const showCustomer = () => {
            if (!hasCustomer) return null
            return (
                <div>
                    <h1>Cliente:  Alessander Salgado</h1>
                </div>
            )
        }

    return(
        <div>
            <p>Digital Inovation</p>
            <p>Bem Vindo a nossa Aula</p>
            {hasCustomer ? renderShowHistory : renderAddCustomer}
            {showCustomer()}
        </div>
    );
};
export default App;