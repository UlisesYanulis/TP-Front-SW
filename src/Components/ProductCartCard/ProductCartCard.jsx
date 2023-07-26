import PropTypes from 'prop-types';
import './ProductCartCard.css'

const ProductCartCard = ({producto}) => {
    return (
        <div className="containerCards">
            <div className='numero'>
                <h3 className='numero'>{producto.numero}</h3>
            </div>
            <div className='imagen'>
                <img src={producto.imagen} width={'300px'} alt="producto.imagen" />
            </div>
            <div className='nombreYPrecio'>
                <h2>{producto.nombre}</h2>
                <h3>$ {producto.precio}</h3>
                <p>Cantidad: {producto.quantity}</p>
            </div>
        </div>
    )
}

ProductCartCard.propTypes = {
    producto: PropTypes.shape({
        numero: PropTypes.number.isRequired,
        imagen: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        quantity: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCartCard