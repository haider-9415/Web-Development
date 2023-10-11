import './App.css';
import User from './User';
function App() {
  function getData() {
    alert('Hello from App.js')
  }
  return (
    <div className="App">
      <User data={ getData} />
    </div>
  );
}
export default App;
