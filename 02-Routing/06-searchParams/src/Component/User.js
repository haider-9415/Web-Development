import {useParams,Link} from 'react-router-dom'
function User() {
    const params = useParams('user')
    const { name } = params
    return (
        <div>
            <li><Link to='/user/haider'>haider</Link></li>
            <li><Link to='/user/harry'>harry</Link></li>
            <h1>this is {name}'s page</h1>
        </div>
    )
}
export default User