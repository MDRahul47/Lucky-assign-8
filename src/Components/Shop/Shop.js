import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Your order Sum</h2>
                {
                    cart.map(singleGames => <Cart
                        singleGames={singleGames}
                        key={singleGames.id}

                    ></Cart>)
                }

                <div className="order-btn">
                    <button className='cart-btn'><p >Choose 1 For Me
                    </p></button> <br />

                    <button className='cart-btn-to'> <p >Choose Again</p></button>
                </div>
            </div>
        </div>
    );
};

export default Shop; 