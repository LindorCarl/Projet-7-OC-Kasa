import React from 'react';
import { Link } from 'react-router-dom';

function ApartmentBox(props) {

    //Metre l'id dans le lien avec state.
    //Puis dans la page qui recupèrera l'id, "ici accomodationpage" utiliser "useLocation".
    return(
        <Link to ="/accomodation" state={{apartmentId:props.id}}>
            <div className='apartment_box'>
                <img src={props.cover} alt='Les appartements'/>
                <p> {props.title} </p>  
            </div>
        </Link>
    ); 
}

export default ApartmentBox;

