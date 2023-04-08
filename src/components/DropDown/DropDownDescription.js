import React, { useState } from 'react';
import Arrow from "../../assets/Arrow.png"

function DropDownDescription(props) { 

    //Récupérer les "children" de props.
    const flat = props.flat;

    //Créer une variable pour mettre à "false" la présence du chevron.
    const [toggle, setToggle] = useState(false);

    //Au clic elle passera à "true" ligne 17.
    //Si "toggle" "true" alors "arrow_up" sinon "arrow_down" ligne 19.
    //Si "toggle" est "true" et "arrow_up" alors afficher le texte sinon cacher le texte pour "arrow_down" ligne 22.
    return (
        <>
            <div className={toggle ? 'box_main' : 'box_main_hidden'}>
                <p className='box_main_header' onClick={()=> setToggle(!toggle)}>
                    Description
                    <img src={Arrow} className={toggle ? "arrow_up" : "arrow_down"} alt='Chevron'/>
                </p>
                <p className={toggle ? 'box_main_text' : 'hidden'}>
                    {flat.description}
                </p>
            </div>            
        </>
    );
}

export default DropDownDescription;

