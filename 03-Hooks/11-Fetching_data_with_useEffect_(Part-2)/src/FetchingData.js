import React, { useState, useEffect } from 'react'
import axios from 'axios'
function FetchingData() {
  const [user, setUser] = useState({})
  const [id, setID] = useState()
  const [idAtButtonClick, setIdAtButtonClick] = useState()
  const HandleClick = () => {
    setIdAtButtonClick(id)
  }
  useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${idAtButtonClick}`)
            .then(res => {  
              setUser(res.data)
          }).catch(err => { console.log("err --> ", err )})
  }, [idAtButtonClick])
  return (
      <div>
      <input type='text' value={id} onChange={e => setID(e.target.value)}
        placeholder='Inter ID' />
      <button type='button' onClick={HandleClick}>Fetch Data</button>
      <h2>Name:</h2>
      <p>{user.name}</p>
      <h2>Username:</h2>
      <p>{user.username}</p>
      <h2>User Email:</h2>
      <p>{user.email}</p>
      <h2>User Mobile:</h2>
      <p>{user.phone}</p>
    </div>
  )
}
export default FetchingData

