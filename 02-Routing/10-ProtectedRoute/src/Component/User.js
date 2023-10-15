import {useParams,Link,useLocation} from 'react-router-dom'
function User() {
    const params = useParams('user')
    const { name } = params
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <li><Link to='/user/haider' state={{name:'haider',age:21,gender:'mail',mobile:'9876543210'}}>Haider</Link></li>
            <li><Link to='/user/harry' state={{name:'harry',age:18,gender:'mail',mobile:'1234567890'}}>Harry</Link></li>
            <h1>{name}'s Details</h1>
        </div>
    )
}
export default User

