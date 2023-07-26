import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return(
        <header className='containerHeader'>
            <div className='headerTitle'>
                <img className="logoImperio" src="https://i.pinimg.com/originals/c2/60/7f/c2607fc18d88b1a18c7a5288576662fc.png" alt="logo imperial" />
                <h1 className="title">Ship Store</h1>
            </div>
            <nav className='botones'>
                <NavLink to='/home'>
                    <button className='boton'><img className='imageniconos' src="https://img.icons8.com/ios-filled/50/death-star.png" alt="deathstar" />HOME</button>
                </NavLink>
                <NavLink to='/cart'>
                    <button className='boton'><img className='imageniconos' src="https://img.icons8.com/ios-filled/50/r2-d2.png" alt="r2d2" />CART</button>
                </NavLink>
                <NavLink to='/contact'>
                    <button className='boton'><img className='imageniconos' src="https://img.icons8.com/ios-filled/50/darth-vader.png" />JOIN THE EMPIRE</button>
                </NavLink>
            </nav>
            <div className='headerSearch'>
                <input className="inputHeader" type="text" placeholder="Search with the force..."/>
                <i className="bi bi-search"></i>
            </div>
            <div>
                    <button className='botoncontacto'>CONTACT</button>
            </div>
            
        </header>
    )
}

export default Header