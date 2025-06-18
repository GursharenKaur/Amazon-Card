import "./Price.css"

function Price({oldPrice, newPrice}){
    let oldStyles = {textDecoration: "line-through"};
    let newStyles = {fontWeight:"bold"}
    return (
        <div className="Price">
            <span style={oldStyles}>{oldPrice}</span>    {/*made span so as to show them in same line*/}
            &nbsp; &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}

export default Price