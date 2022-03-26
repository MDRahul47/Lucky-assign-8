import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;