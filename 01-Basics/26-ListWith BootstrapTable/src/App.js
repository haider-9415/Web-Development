import './App.css';
import { Table } from 'react-bootstrap';
function App() {
  const users =[
    {name:'Ironman', email:'ironman@gmail.com', contact:'111'},
    {name:'Captain', email:'captain@gmail.com', contact:'222'},
    {name:'Spiderman', email:'spiderman@gmail.com', contact:'111'},
    {name:'Thor', email:'thor@gmail.com', contact:'444'}
  ]
    return (
      <div className='App'>
        <h1>List With Bootstrap Table</h1>
        <Table striped variant='dark'>
          <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
        {
          users.map((item, k) => {
            return(
              item.contact === '111' ?
                <tr key={k}>
                  <td>{ item.name}</td>  
                  <td>{ item.email}</td>  
                  <td>{ item.contact}</td>
                </tr>: null
            )
          })
            }
            </tbody>
        </Table>
      </div>
    )
}
export default App;
