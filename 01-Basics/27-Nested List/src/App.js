import './App.css';
import { Table } from 'react-bootstrap';
function App() {
  const users =[
    {
      name: 'Ironman', email: [
        { one: 'ironman@gmail.com' },
        { two: 'ironman@outlook.com'}
      ], address: [
      {Hn:'10',street:'abc',city:'Noida',country:'India'},
      {Hn:'12',street:'def',city:'Delhi',country:'India'},
      {Hn:'21',street:'ghi',city:'Licknow',country:'India'},
      {Hn:'110',street:'jkl',city:'Mumbai',country:'India'}
    ]},
    {
      name: 'Captain', email: [
        { one: 'captain@gmail.com' },
        { two: 'captain@outlook.com'}
      ], address: [
        {Hn:'10',street:'abc',city:'Noida',country:'India'},
        {Hn:'12',street:'def',city:'Delhi',country:'India'},
        {Hn:'21',street:'ghi',city:'Licknow',country:'India'},
        {Hn:'110',street:'jkl',city:'Mumbai',country:'India'}
    ]},
    {
      name: 'Spiderman', email: [
        { one: 'spiderman@gmail.com' },
        { two: 'spiderman@outlook.com'}
      ], address: [
        {Hn:'10',street:'abc',city:'Noida',country:'India'},
        {Hn:'12',street:'def',city:'Delhi',country:'India'},
        {Hn:'21',street:'ghi',city:'Licknow',country:'India'},
        {Hn:'110',street:'jkl',city:'Mumbai',country:'India'}
    ]},
    {
      name: 'Thor', email: [{one:'thor@gmail.com' },{two:'thor@outlook.com'}], address: [
        {Hn:'10',street:'abc',city:'Noida',country:'India'},
        {Hn:'12',street:'def',city:'Delhi',country:'India'},
        {Hn:'21',street:'ghi',city:'Licknow',country:'India'},
        {Hn:'110',street:'jkl',city:'Mumbai',country:'India'}
    ]}
  ]
    return (
      <div className='App'>
        <h1>List With Bootstrap Table</h1>
        <Table striped variant='dark'>
          <tbody>
            <tr>
              <td>S.N.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
            {
              users.map((item,  k) => {
            return(
              <tr key={k}>
                <td>{k+1}</td>
                  <td>{ item.name}</td>  
                <td>
                <Table striped variant='dark'>
                    <tbody>
                      {
                      item.email.map((emailData, j) => 
                        <tr key={j}>  
                          <td>{j+1 }</td>
                            <td>{emailData.one } {emailData.two }</td>
                          </tr>
                      )}
                    </tbody>
                  </Table>
                </td>  
                <td>
                <Table striped variant='dark'>
                    <tbody>
                      <tr>
                        <td>S.N.</td>
                        <td>Home No.</td>
                        <td>Street</td>
                        <td>City</td>
                        <td>Country</td>
                      </tr>
                      {
                      item.address.map((data, i) => 
                        <tr key={i}>
                          <td>{i + 1}</td>
                            <td>{data.Hn }</td>
                            <td>{data.street }</td>
                            <td>{data.city }</td>
                            <td>{data.country }</td>
                          </tr>
                      )}
                    </tbody>
                  </Table>
                  </td>
                </tr>
              )
            })
          }
            </tbody>
        </Table>
      </div>
    )
}
export default App;
