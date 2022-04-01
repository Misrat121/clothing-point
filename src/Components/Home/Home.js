import React from 'react';
import useCloth from '../../hooks/useCloth';
import Cart from '../Cart/Cart';
import Cloth from '../Cloth/Cloth';
import './Home.css'

const Home = () => {
    const [cloth, setCloth] = useCloth();
    return (
        <div className='home-container'>
           <div className="cloth-container">
            {
                cloth.map(cloth => <Cloth
                key = {cloth._id}
                cloth = {cloth}
                ></Cloth>)
            }
           </div>
           <div className="cart-container">
              <Cart></Cart>
           </div>
        </div>
    );
};

export default Home;