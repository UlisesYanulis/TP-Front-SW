import { NavLink } from 'react-router-dom'
import './Body.css'

const Body = () => {
    return (
        <body className='containerBody'>
            <div className='cuerpo'>
                <h4 className='boba'>BOBA FETT</h4>
                <img className='fondo' src="../src/assets/img/fondo.png" alt="fondo" />
                <h1 className='new'>NEW</h1>
                <img className='nave' src="../src/assets/img/nave1.png" alt="nave" />
                <NavLink to='/catalogo' className='botonProductoBox'>
                    <button className='botonProducto'>Ver todos los productos</button>
                </NavLink>
            </div>
        </body>
    )
}

export default Body