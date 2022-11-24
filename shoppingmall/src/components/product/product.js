import { Link } from "react-router-dom";
import "./product.css"
export const Product = ({product, convertPrice}) => {
    const { id, name, price, image} = product;

    return ( product && (
        <div className="product">
            <Link to={`/product/${id}`}>
                <div className="productImg"><img src={image} alt=""/></div>
            </Link>
            <div className="productName">{name}</div>
            <div className="productPrice">{convertPrice(price)}원</div>
        </div>
    ));
};