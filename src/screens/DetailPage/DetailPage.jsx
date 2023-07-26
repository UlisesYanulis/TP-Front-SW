import { useState } from 'react'
import { useCustomContext } from '../../ContextProvider/ContextProvider'
import './DetailPage.css'
import { useParams } from 'react-router-dom'
import Counter from '../../Components/Counter/Counter'

const DetailPage = () => {

    const { id } = useParams();
    const {getProductById, addProductCart, isInCart, cart} = useCustomContext()
    const productDetail = getProductById(id)
    const [productIsInCart, setProductIsInCart] = useState(isInCart(id))



    return (
        <div className='detailContainer'>
            <div className='productInfo'>
                <h2>{productDetail.nombre}</h2>
                <img src={productDetail.imagen} width={'100%'} alt="" />
                <h3>{productDetail.categoria}</h3>
                <h3>{productDetail.precio}</h3>
                {
                    isInCart(id)
                    ?
                    <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id}/>
                    :
                    <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>
                }
            </div>
        </div>
    )
}

export default DetailPage