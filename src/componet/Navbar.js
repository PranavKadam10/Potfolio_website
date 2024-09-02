import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Navbar.css';

export const Navbar = () => {
    const [menuopen, setmenuopen] = useState(false);
  return (
    <nav>
        <Link to='/' className='title'>POTFOLIO</Link>
        <div className='menu' onClick={()=>{
            setmenuopen(!menuopen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    <ul className={menuopen ? 'open' : ''}>
        <li>
            <NavLink to='/'>About</NavLink>
        </li>
        <li>
            <NavLink to='/skills'>Skils</NavLink>
        </li>
        <li>
            <NavLink to='/project'>Project</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
    </ul>
    </nav>
  )
}


export default Navbar;