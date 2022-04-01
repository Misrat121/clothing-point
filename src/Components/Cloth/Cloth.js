import React from 'react';
import './Cloth.css'

const Cloth = (props) => {
const {handleAddToCart, cloth} = props;
    const {name, picture, price, gender} = props.cloth;
    return (
        <div className='cloth'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price : $ {price}</p>
            <p>Gender: {gender}</p>
            <button onClick={()=> handleAddToCart (cloth)}>Add to Cart</button>
        </div>
    );
};

export default Cloth;