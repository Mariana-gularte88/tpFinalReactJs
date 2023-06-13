import './Navbar.css'
import CartWidget from './CartWidget/CartWidget'
import logo from '../assets/CaprichosBOUTIQUELOGO.jpg'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="marca">
        <Link to= '/'>
        <img className='logo' src={logo} />
        <h2 >Caprichos Boutique</h2>
        </Link>
        <div>
        <NavLink to= {`/category/ParaEllas`} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Para Ellas</NavLink>
        <NavLink to= {`/category/ParaEllos`} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Para Ellos</NavLink>
        <NavLink to= {`/category/Unisex`} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Unisex</NavLink>
        </div>
       <CartWidget/>  
    </div>
)
}

export default Navbar