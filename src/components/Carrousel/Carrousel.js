import React, { useState } from 'react';

function Carrousel(props) {
    //Récupérer les enfants dans "props".
    const pictures = props.flat.pictures

    //Initialiser cette variable à 0 grâce à "useState".
    const [currentPicture, setCurrentPicture] = useState(0);

    //Ensuite, si "i" est égal à 0 (index 0) alors afficher la classe "show".
    const showContent = (i) => {
        if(i === currentPicture) return "show";
        //Sinon rien.
        return "";
    };

    //Ici "pictures.length" est un modulo donc le reste d'une division.
    //Ce modulo va permettre de ne pas depasser une certaine valeur
    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    }

    //Fonction pour mettre à -1 "current value" étant avant à 0.
    const moveToPrevious = () => {
        const newCurrentPicture = currentPicture - 1;
        if(newCurrentPicture === -1){
            //Mettre à jour la longueur.
           return setCurrentPicture(pictures.length -1);
        }
        //Sinon retour en arrière normal.
        setCurrentPicture((currentPicture - 1)% pictures.length);
    }

    return (
        <>
            <div className='banner_container'>
                {pictures.map((pic, i) => ( 
                    <img key={pic} className={showContent(i)} src={pic} alt='Bannière'/>
                ))}
                
                { pictures.length > 1 && 
                    <>
                        <div className='banner_container_vector'>
                            <i onClick={moveToPrevious} className="fa-solid fa-chevron-left"></i>
                            <i onClick={moveToNext} className="fa-solid fa-chevron-right"></i>
                        </div>

                        <p> 
                            {currentPicture +1}/{pictures.length}
                        </p>
                    </>
                }
            </div>
        </>
    );
}

export default Carrousel;
