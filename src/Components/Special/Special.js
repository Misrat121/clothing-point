import React, { useContext } from 'react';
import { RingContext } from '../Grand/Grand';

const Special = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h3>Special</h3>
            <p><small>Gift : {ring}</small></p>
        </div>
    );
};

export default Special;