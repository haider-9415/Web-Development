import React,{useState} from 'react'
function HookCounter() {
  const [name, setName] = useState({firstName:'', lastName:''})
  return (
    <form>
      <h2>First name: {name.firstName }</h2>
      <h2>Last name: {name.lastName }</h2>
      <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value })} placeholder='Enter first name' />
      <br/><br/>
      <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} placeholder='Enter last name' />
    </form>
  )
}
export default HookCounter
