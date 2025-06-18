import Product from "./Product.jsx"
import "./ProductTab.css"
function ProductTab(){
    return (
        <div className = "ProductTab">
            <Product title="Logitech MX Master" index={0}/>
            <Product title="Apple Pencil (2nd Gen)" index={1}/>
            <Product title="Zebronics Zeb-Transformer" index={2}/>
            <Product title="Petronics Toad 23" index={3}/>
        </div>
    )
}

export default ProductTab;