import { NavLink, Outlet} from 'react-router-dom'
function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>this is about page of website</p>
            <div>
                <NavLink className='about-link' to='company'>Company</NavLink>
                <NavLink className='about-link' to='channel'>Channel</NavLink>
                <NavLink className='about-link' to='other'>Other</NavLink>
            <Outlet/>
            </div>    
        </div>
    )
}
export default About
