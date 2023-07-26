// CartPage.js

import { NavLink } from 'react-router-dom';
import { ProductCartCard } from '../../Components';
import { useCustomContext } from '../../ContextProvider/ContextProvider';
import './CartPage.css';

const CartPage = () => {
const { cart, getTotal } = useCustomContext();

    return (
        <div className='cartContainer'>
        {cart.length === 0 ? (
            <div className='empty-cart-section'>
            <h2 className='empty-cart-message'>Your cart is empty...</h2>
            <NavLink to='/catalogo'>
                <button className='explore-products-button'>Explore Products</button>
            </NavLink>
            </div>
        ) : (
            <div className='containerdecart'>
                <h2 className='cart-title'>Your Cart</h2>
                <div className='cart-items'>
                    {cart.map((producto) => (
                    <ProductCartCard key={producto.id} producto={producto} />
                    ))}
                </div>
                <div className='cart-total'>
                    <h2 className='total-value'>Total: ${getTotal()}</h2>
                    <button className='buy-button'>Buy</button>
                </div>
            </div>
        )}
        </div>
    );
    };

export default CartPage;
