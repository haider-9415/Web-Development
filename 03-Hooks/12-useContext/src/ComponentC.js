import React, { useContext } from 'react'
import { userContext, channelContext } from './App'
function ComponentC() {
    const user = useContext(userContext)
    const channel = useContext(channelContext)
  return (
    <div>
          <h2>User: {user} - Channel: { channel }</h2>
    </div>
  )
}
export default ComponentC

