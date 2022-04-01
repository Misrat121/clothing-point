import React, { useState } from 'react';
import useCloth from '../../hooks/useCloth';
import Cart from '../Cart/Cart';
import Cloth from '../Cloth/Cloth';
import './Home.css'

const Home = () => {
    const [cloth, setCloth] = useCloth();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (seletedItem) => {
        const exists = cart.find(cloth => cloth._id === seletedItem._id);
        if(!exists){
            const newCart = [...cart, seletedItem];
            setCart(newCart);
        }
        else{
            alert('item already added')
        }
      
    }

    const handleRemoveFromCart = (seletedItem) =>{
        const rest = cart.filter(cloth => cloth._id !== seletedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
           <div className="cloth-container">
            {
                cloth.map(cloth => <Cloth
                key = {cloth._id}
                cloth = {cloth}
                handleAddToCart = {handleAddToCart}
                ></Cloth>)
            }
           </div>
           <div className="cart-container">
             
              <Cart
                handleRemoveFromCart ={handleRemoveFromCart}
              cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Home;