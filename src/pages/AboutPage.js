import React, { useEffect, useState } from 'react';
import AboutBanner from '../components/Aboutbanner/AboutBanner';
import DropDown0 from '../components/AboutDropDown/DropDown0';
import DropDown1 from '../components/AboutDropDown/DropDown1';
import DropDown2 from '../components/AboutDropDown/DropDown2';
import DropDown3 from "../components/AboutDropDown/DropDown3";


function AboutPage() {

    //Mettre "qqch" dans "usestate" sinon erreur.
    const [array, setArray] = useState(null);

    //Télécharger les données de la fonction.
    useEffect(fetchAboutData, [])
    
    //Méthode fetch pour récupérer les éléments.
    function fetchAboutData(){
        fetch("ArrayAboutData.json")
        .then((res) => res.json())
        .then((data) => {
            //Récupérer les données de flat pour les exporter à l'extérieur de la fonction.
            setArray(data);
        })
        .catch(console.error);
    }

    //Pour éviter les erreurs de "usestate".
    if(array == null) return <p></p>;
    
    return (
        <>
            <AboutBanner />
            <DropDown0 data={array[0]}/>
            <DropDown1 data={array[1]}/>
            <DropDown2 data={array[2]}/>
            <DropDown3 data={array[3]}/>
        </>
    );
}

export default AboutPage;

