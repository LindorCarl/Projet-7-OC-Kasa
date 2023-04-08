import React, { useEffect, useState } from 'react';
import ApartmentBox from '../ApartmentBox/ApartmentBox';


function Apartment() {

    const [apartments, setApartments] = useState([]);

    //useeffect avec un tableau vide va permettre de lancer 
    //une seule fois la fonction au moment du chargement. 
    useEffect(fetchApartments, []) 

    function fetchApartments() {
        fetch("db.json")
        .then( res => res.json())
        .then((data) => {
            setApartments(data)})
        .catch( err => err)
    }

    return (
        <div className='apartment'>
            {apartments.map((apartment, i) => (
            <ApartmentBox key={i} title= {apartment.title} cover= {apartment.cover} id= {apartment.id}/>))}
        </div>
    );
}

export default Apartment;