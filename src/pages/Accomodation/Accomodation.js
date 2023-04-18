import React, { useEffect, useState } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';
import AccommodationHeader from '../../components/AccommodationHeader/AccommodationHeader';
import { useLocation } from 'react-router-dom';
import Collapse from "../../components/Collapse/Collapse"

function ApartmentPage() {
    //Ici on récupère l'ID de state.
    const location = useLocation();

    //Mettre "qqch" dans "usestate" sinon erreur.
    const [selectedFlat, setSelectedFlat] = useState(null);

    //Télécharger les données de la fonction.
    useEffect(fetchApartmentData, [])
    
    //Méthode fetch pour récupérer les éléments.
    function fetchApartmentData(){
        fetch("db.json")
        .then((res) => res.json())
        .then((flatsData) => {
            const flat = flatsData.find((flatId) => flatId.id === location.state.apartmentId)
            //Récupérer les données de flat pour les exporter à l'extérieur de la fonction.
            setSelectedFlat(flat);
        })
        .catch(console.error);
    }

    //Si usestate est null retourne cette balise pour éviter les erreurs. 
    if(selectedFlat == null) return <p></p>;
    
    return (
        <>
            <Carrousel flat={selectedFlat}/>
            <AccommodationHeader flat= {selectedFlat}/>
            <div className='box'>
                <Collapse title= {'Description'} content={selectedFlat.description}/>
                <Collapse title= {'Équipements'} content={selectedFlat.equipments}/>
            </div>
        </>
    );
}

export default ApartmentPage;

