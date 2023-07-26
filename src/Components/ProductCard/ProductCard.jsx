import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({producto}) => {
    return (
        <Link to={'/detail/' + producto.id} className="containerCards">
            <div className='numero'>
                <h3 className='numero'>{producto.numero}</h3>
            </div>
            <div className='imagen'>
                <img src={producto.imagen} width={'600px'} alt="producto.imagen" />
            </div>
            <div className='nombreYPrecio'>
                <h2 className='nombre'>{producto.nombre}</h2>
                <h3 className='precio'>$ {producto.precio}</h3>
            </div>
        </Link>
    )
}

ProductCard.propTypes = {
    producto: PropTypes.shape({
        numero: PropTypes.number.isRequired,
        imagen: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCard