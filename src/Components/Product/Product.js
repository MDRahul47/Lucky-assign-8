import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='info'>

                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>

        </div>
    );
};

export default Product;