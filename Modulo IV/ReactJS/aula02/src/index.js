import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button'
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const element = 'Digital Inavation'
const element2 = <h1>Ola Turma</h1>




function sum(a, b) {
  return a + b
}

function primeiroJSX() {
  return (
    <div className="teste">
      Alessander Salgado | teste de react JSX
      <h1>Soma: {sum(30,30)}</h1>
      {element}
      {element2}
    </div>
  )
}

function soma(c,d) {
  alert(c+d)
}

const App = () => {
  return (
      <div className="App">
        {primeiroJSX()}
        <Button onClick={() => soma(10,20)} name='Alessander' />
        <ComponentA>
          <ComponentB>
          <Button onClick={() => soma(30,20)} name='Patricia' />
          </ComponentB>
        </ComponentA>
      </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElem