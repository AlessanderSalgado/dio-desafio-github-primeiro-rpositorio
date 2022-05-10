import React from 'react';

const showEvent = (e) => {
    console.log('clicked')
    console.log(e)
}
const Button = <button onClick={showEvent}>Mostrar evento</button>

const App = () => {
    
     return(
        <div>
            <p>Digital Inovation</p>
            <p>Bem Vindo a nossa Aula</p>
            {Button}
        </div>
    );
};
export default App;