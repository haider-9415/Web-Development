import './Style.css'
import { NavLink } from 'react-router-dom'
function NavBar() {
    return (
        <div className='nav'>
            <ul>
                <li><NavLink className='nav-link' to='/home'>Home</NavLink></li>
                <li><NavLink className='nav-link' to='/about'>About</NavLink></li>
                <li><NavLink className='nav-link' to='/contact'>Contact</NavLink></li>
                <li><NavLink className='nav-link' to='/filter'>Filter</NavLink></li>
            </ul>
        </div>
    )
}
export default NavBar
