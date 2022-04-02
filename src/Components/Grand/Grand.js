import React, { useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grand.css'

const Grand = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handleBuyAHouse = () =>{
        const newHouseCount = house+1;
        setHouse(newHouseCount);
    }
    return (
        <div className='grand'>
            <h4>Grand</h4>
           
            <p>House : {house}  <button onClick ={handleBuyAHouse}>Buy a House</button></p>
            <div style = {{display: 'flex'}}>
            <Father house={house} ornament = {ornament}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>

            </div>
            
        </div>
    );
};

export default Grand;