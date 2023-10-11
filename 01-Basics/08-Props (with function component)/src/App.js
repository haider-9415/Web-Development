import './App.css';
import Student  from './Props';
function App() {
    return (
      <div className="App">
        <h1>Props In React</h1>
        <Student name={'haider'} age={21} other={{address:'Lucknow',mobile:1234567890}} />
        <Student name={'harry'} age={18} other={{address:'Mumbai',mobile:9876543210}} />
        <Student name={'iron man'} age={24} other={{address:'Delhi',mobile:1234509876}} />
      </div>
    );
}
export default App;

