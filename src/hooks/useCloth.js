import { useEffect, useState } from "react"

const useCloth = ()=>{
    const [cloth, setCloth]= useState([]);

    useEffect( () =>{
        fetch('cloth.json')
        .then(res => res.json ())
        .then(data => setCloth(data));
    },[]);
    return[cloth, setCloth]
}

export default useCloth;