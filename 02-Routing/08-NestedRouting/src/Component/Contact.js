import { Link } from "react-router-dom"

function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <li><Link to='/user/haider'>haider</Link></li>
            <li><Link to='/user/harry'>harry</Link></li>
        </div>
    )
}
export default Contact
