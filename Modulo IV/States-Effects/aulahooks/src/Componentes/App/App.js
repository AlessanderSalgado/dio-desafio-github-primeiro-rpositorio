import './App.css';
import Counter from '../Counter/Counter';
import SmartCounter from '../SmartCounter/SmartCounter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';


function App() {
  return (
    <>
    <h1>Hello World</h1>
    <p><Counter /></p>
    <p><SmartCounter /></p>
    <h1>ifood</h1>
    <p><IfoodCounter /></p>
    </>
  );
}

export default App;
