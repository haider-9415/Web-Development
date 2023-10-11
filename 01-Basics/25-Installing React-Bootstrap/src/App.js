import './App.css';
import { Button } from 'react-bootstrap';
function App() {
    return ( 
      <div className='App'>
        <h1>React - Bootstrap</h1>
        {/* <button onClick={()=> alert('this is from bootstrap')}>Click Me</button> */}
        <Button variant="outline-primary">Primary</Button>{' '}
        <Button variant="outline-secondary">Secondary</Button>{' '}
        <Button variant="outline-success">Success</Button>{' '}
        <Button variant="outline-warning">Warning</Button>{' '}
        <Button variant="outline-danger">Danger</Button>{' '}
        <Button variant="outline-info">Info</Button>{' '}
        <Button variant="outline-light">Light</Button>{' '}
        <Button variant="outline-dark">Dark</Button>
      </div>
    )
}
export default App;
