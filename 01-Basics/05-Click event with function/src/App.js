// import logo from './logo.svg';
import './App.css';
function App() {

  let myName = 'i am haider';
  
  function ClickEvent() {
    myName = 'this is App.js';
    alert('function called')
  }
  
  return (
    <div className="App">
      <h1>{myName}</h1>
      <button onClick={ClickEvent} >Click Me</button>

      {/* <button onClick={() => alert('function called')} >Click Me</button> */}
    </div>
  );
}
export default App;

