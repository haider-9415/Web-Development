import { Link } from "react-router-dom"

function CustomerCare() {
    return (
        <div>
            <h1>CustomerCare Page</h1>
            <li><Link to='/user/haider'>haider</Link></li>
            <li><Link to='/user/harry'>harry</Link></li>
        </div>
    )
}
export default CustomerCare
