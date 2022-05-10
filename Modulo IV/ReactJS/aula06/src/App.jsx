import React from 'react';

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
    
    const renderCustomers = (customer, index) => {
        return (
        <div key={'customer-${cutomer.id}'}>           
            <li>{customer.name}</li>
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
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};
export default App;