import {Link} from 'react-router-dom'
function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>this is about page of website</p>
            <li><Link to='/user/haider'>haider</Link></li>
            <li><Link to='/user/harry'>harry</Link></li>
        </div>
    )
}
export default About
