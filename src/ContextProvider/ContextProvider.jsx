import { createContext, useContext, useState} from "react"
import PropTypes from "prop-types";
import imagenes from "../assets/imagenes"

const Context = createContext()

const ContextProvider = ({children}) => {
    const products =[
            {
                id: 1,
                numero: 1,
                imagen: imagenes[0],
                nombre: "Slave 1",
                precio: 10.99,
                stock: 8,
            },
            {
                id: 2,
                numero: 2,
                imagen: imagenes[3],
                nombre: "TIE Fighter",
                precio: 15.99,
                stock: 8,
            },
            {
                id: 3,
                numero: 3,
                imagen: imagenes[4],
                nombre: "Interceptor TIE",
                precio: 10.99,
                stock: 8,
            },
            {
                id: 4,
                numero: 4,
                imagen: imagenes[1],
                nombre: "Millenium Falcon 1",
                precio: 10.99,
                stock: 8,
            },
            {
                id: 5,
                numero: 5,
                imagen: imagenes[2],
                nombre: "X-Wing",
                precio: 10.99,
                stock: 8,
            },
            {
                id: 6,
                numero: 6,
                imagen: imagenes[5],
                nombre: "Snowspeeder",
                precio: 10.99,
                stock: 8,
            },
            {
                id: 7,
                numero: 7,
                imagen: imagenes[6],
                nombre: "Star Destroyer",
                precio: 10.99,
                stock: 8,
            },
            {
                id: 8,
                numero: 8,
                imagen: imagenes[7],
                nombre: "Interdictor-class Star Destroyer",
                precio: 10.99,
                stock: 8,
            },
            {
                id: 9,
                numero: 9,
                imagen: imagenes[8],
                nombre: "Lambda-class T-4a shuttle",
                precio: 10.99,
                stock: 8,
            },
            {
                id: 10,
                numero: 10,
                imagen: imagenes[9],
                nombre: "Force spirit",
                precio: 10.99,
                stock: 8,
            },
            {
                id: 11,
                numero: 11,
                imagen: imagenes[10],
                nombre: "BTL-B Y-wing starfighter",
                precio: 10.99,
                stock: 8,
            },
            {
                id: 12,
                numero: 12,
                imagen: imagenes[11],
                nombre: "Delta-7B Aethersprite-class light interceptor",
                precio: 10.99,
                stock: 8,
            },
    ]

    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }

    const getProductCartById =(id) =>{
        return cart.find(producto => producto.id === Number(id))
    }

    const [cart, setCart] = useState([])
    const isInCart  = (id) => cart.some(producto => producto.id === Number(id))
    const addProductCart = (id, quantity) => {
        if(isInCart(id)){
            setCart(cart.map(product => {
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
    }

    const getTotal  = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    }

    

    return (
        <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}} >
            {children}
        </Context.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export const useCustomContext = () => useContext(Context)

export default ContextProvider

