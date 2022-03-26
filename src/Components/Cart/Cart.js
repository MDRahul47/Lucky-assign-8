import React from 'react';
import './Cart.css';



const Cart = ({ singleGames }) => {
    console.log(singleGames);

    return (
        <div className='cart'>

            <div >

                <p>{singleGames}</p>

            </div>
        </div >
    );
};

export default Cart;