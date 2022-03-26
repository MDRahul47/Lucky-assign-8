import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h1>this is for products: {products.length}</h1>
            </div>
            <div className="cart-container">
                <h2>order summury</h2>
            </div>
        </div>
    );
};

export default Shop; <h1>hlw</h1>