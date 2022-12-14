import "./main.css"
import Header from "../header/header";
import {Product} from "../product/product";
import {useEffect} from "react";
import {getProducts} from "../../service/fetcher";
import axios from "axios";

export const Main = ({convertPrice, products, setProducts}) => {
    
    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data.data.products)
        });
    }, [setProducts]);

    return (
        <>
            <Header products={products} setProducts={setProducts}/> 
            <main className="productBlock">
            {products.map((product) => {
                return (
                    <Product 
                        key={`key-${product.id}`}
                        product={product}
                        convertPrice = {convertPrice}
                    />
                );
            })}
            </main>
        </>
    );
};

