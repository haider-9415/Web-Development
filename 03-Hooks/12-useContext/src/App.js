import React from 'react';
import './App.css';
import ComponentA from './ComponentA';
export const userContext = React.createContext()
export const channelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <h1>useContext</h1>
      <userContext.Provider value={'haider'}>
        <channelContext.Provider value={'CodeEvalution'}>
          <ComponentA/>
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}
export default App;
