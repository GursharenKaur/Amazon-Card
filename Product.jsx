import "./Product.css"
import Price from "./Price.jsx"
function Product({title, index}){
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9, 199", "899", "278"];

    let description = [["8,000 DPI","5 programmable buttons"], 
    ["Intuitive touch surface","Designed for iPad Pro"],
    ["easy working","Designed for iPad Pro"], 
    ["Wireless Mouse 2.4GHz", "Optical Orientation"]
];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[index][0]}</p>
            <p>{description[index][1]}</p>
            <Price oldPrice={oldPrices[index]} newPrice={newPrices[index]} />
        </div>
    )
}

export default Product;