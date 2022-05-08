import React from 'react';

const listCustomer = [
    {
        id: 1,
        name: 'Alessander'
    },
    {
        id: 2,
        name: 'Marcelo'
    },
    {
        id: 3,
        name: 'Patricia'
    },
    {
        id: 4,
        name: 'Caio'
    }
]

const App = () => {
    
    const renderCustomers = (customer, index) => {
        return (<li key={index}>{customer.name}</li>)
    }
    return(
        <div>
            <p>Digital Inovation</p>
            <p>Bem Vindo a nossa Aula</p>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};
export default App;