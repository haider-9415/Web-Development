import React, {useEffect} from 'react';
function User(props) {
  useEffect(() => {
    console.log('useEffect')
  },[props.count])
    return (
      <div className='App'>
        <h2>Count prop: {props.count}</h2>
        <h2>Data prop: {props.data }</h2>
      </div>
    )
}
export default User;
