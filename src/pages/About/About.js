import React, { useEffect, useState } from 'react';
import AboutBanner from '../../components/Aboutbanner/AboutBanner';
import Collapse from '../../components/Collapse/Collapse';


function About() {

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
            <main >
				{array.map(datas => {
					return (
						<div key={datas.id}>
							<Collapse title={datas.title} content={datas.content} />
						</div>
					)}
				)}
			</main>
        </>
    );
}

export default About;
