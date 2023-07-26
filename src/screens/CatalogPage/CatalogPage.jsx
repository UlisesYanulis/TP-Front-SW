import { ProductCard } from "../../Components"
import { useCustomContext } from "../../ContextProvider/ContextProvider"
import "./CatalogPage.css"

const CatalogPage = () => {
    const{products}=useCustomContext()
    return (
        <div className="containerCard">
            <div className="body">
                {products.map(producto => (
                    <ProductCard producto={producto}key={producto.id}/>
                ))}
            </div>
        </div>
    )
}

export default CatalogPage