import './App.css';
// import React,{Fragment} from 'react';
import User from './MyFile';
function App() {
  function parentAlert(data) {
    console.log('Name:', data.name)
    console.log('Email: ',data.email)
  }
  return (
      <div className='App'>
      <h1>LiftingStateUp means SendingDataChildToParentComponent</h1>

      <User Alert={parentAlert } />
      </div>
    )
}
export default App;
