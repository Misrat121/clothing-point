import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(cloth => <p>
                    {cloth.name}
                    <button onClick={()=> handleRemoveFromCart(cloth)}>x</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;