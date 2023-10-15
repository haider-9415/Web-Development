import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    )
}
export default NavBar
