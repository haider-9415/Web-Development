import React, { useState } from 'react'
import useDocTitle from './useDocTitle'

function DocTitleOne() {
    const [count, seCount] = useState(0)
    useDocTitle(count)
  return (
      <div>
          <h2>DocTitleOne: { count }</h2>
          <button onClick={() => seCount(count + 1)}>Count</button>
    </div>
  )
}

export default DocTitleOne
