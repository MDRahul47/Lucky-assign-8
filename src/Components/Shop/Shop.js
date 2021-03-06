import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [y, setY] = useState([]);

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

    const reset = () => {
        setCart([]);
    }
    const ChooseOne = () => {
        if (!cart.length) {
            return
        }
        const x = Math.floor(Math.radom() * cart.length)
        setY(cart[x])
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
                    <button onCanPlay={ChooseOne} className='cart-btn'><p >Choose 1 For Me
                    </p></button> <br />

                    <button onClick={reset} className='cart-btn-to'> <p >Choose Again</p></button>
                    <p>{y.singleGames}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop; 