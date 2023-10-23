import React, { useState, useEffect } from 'react'
import axios from 'axios'
function FetchingData() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log("res --> ", res);
                setPosts(res.data)
            }).catch(err => { console.log("err --> ", err )})
    }, [])
  return (
      <div>
          <ul>
              <h1>Posts Title:</h1>
              {
                posts.map(post => (
                <li key={post.id}>{post.title }</li>
                ))
            }
          </ul>
    </div>
  )
}
export default FetchingData

