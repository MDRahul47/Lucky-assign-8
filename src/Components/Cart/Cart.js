import React from 'react';
import './Cart.css';
const Cart = () => {
    return (
        <div className='cart'>
            <h2 className='select'>Select Game</h2>
            <div >
                <button className='cart-btn'><p >Choose 1 For Me
                </p></button> <br />

                <button className='cart-btn-to'> <p >Choose Again</p></button>
            </div>
        </div >
    );
};

export default Cart;