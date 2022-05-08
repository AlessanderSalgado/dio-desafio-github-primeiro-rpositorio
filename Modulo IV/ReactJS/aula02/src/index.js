import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Button from './Button'
//import ComponentA from './ComponentA'
//import ComponentB from './ComponentB'
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const element = 'Digital Inavation'
//const element2 = <h1>Ola Turma</h1>




//function sum(a, b) {
//  return a + b
//}

//function primeiroJSX() {
//  return (
//    <div className="teste">
//      Alessander Salgado | teste de react JSX
//      <h1>Soma: {sum(30,30)}</h1>
//      {element}
//      {element2}
//    </div>
//  )
//}

//function soma(c,d) {
//  alert(c+d)
//}

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      clock: 1000,
      copo: 'Agua'
    }
  }
  componentDidMount(){
    window.setTimeout(() => {
      this.setState({
        copo: 'Suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render(){
    const {clock, copo} = this.state
    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

//const App = () => {
//  return (
//      <div className="App">
//        {primeiroJSX()}
//        <Button onClick={() => soma(10,20)} name='Alessander' />
//        <ComponentA>
//          <ComponentB>
//            <Button onClick={() => soma(30,20)} name='Patricia' />
//          </ComponentB>
//        </ComponentA>
//      </div>
//  )
//}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)






//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
