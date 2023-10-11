import './App.css';
import User from './MyFile';
function App() {
  const users =[
    {name: 'Ironman', email:'ironman@gmail.com',contact:'444'},
    {name: 'captain', email:'captain@gmail.com',contact:'444'},
    {name: 'Spiderman', email:'spiderman@gmail.com',contact:'444'},
    {name: 'Thor', email:'thor@gmail.com',contact:'444'}
  ]

  function Alert() {
    alert('this is button')
  }
  
    return (
      <div className='App'>
        <h1>Reuse Component In Loop</h1>
        {
          users.map((item, i) => 
            <User data={item } button={Alert()} />
          )
        }
      </div>
    )
}
export default App;
