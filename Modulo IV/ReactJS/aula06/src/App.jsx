import React from 'react';
import Button from '../components/Button'

const listCustomer = [
    {
        id: 1,
        name: 'Alessander',
        skills: ['react', 'Node', 'CSS', 'Webpack']
    },
    {
        id: 2,
        name: 'Marcelo',
        skills: ['HTML', 'React Native',, 'Go', 'Js']
    },
    {
        id: 3,
        name: 'Patricia',
        skills: ['Java']
    },
    {
        id: 4,
        name: 'Caio',
        skills: ['Peasson']
    }
]

const App = () => {
    const nome = 'Alessander'
    
    const handLeChange = (e) => {
        const { value } = e.target
        console.log(value)
    }

    const handLeDelete = (id) => {
        console.log('Deletar Clientes')
        alert(`ID do Cliente: ${id}`)
    }

    const showEvent = (e) => {
        console.log('clicked')
        console.log(e)
        alert(nome)
    }

    const Button1 = <button onClick={showEvent}>Mostrar evento</button>
    
    const renderCustomers = (customer, index) => {
        return (
        <div key={'customer-${cutomer.id}'}>           
            <li>{customer.name} <Button onClick={() => handLeDelete(customer.id)}>Deletar Clientes</Button></li>
            {customer.skills.map(renderSkills)}
        </div>
        )
    }
    const renderSkills = (skill, index) => {
        return (
            <div style={{paddingLeft: '30px'}}>
                <li key={'skill-${index}'}>{skill}</li>
            </div>
        )
    }
    return(
        <div>
            <p>Digital Inovation</p>
            <p>Bem Vindo a nossa Aula</p>
            <input onChange={handLeChange} />
            <div>
                {Button1}
            </div>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};
export default App;