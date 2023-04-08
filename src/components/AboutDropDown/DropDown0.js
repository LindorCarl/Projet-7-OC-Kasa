import React, { useState } from 'react';
import Arrow from "../../assets/Arrow.png"

function DropDown0(props) {

    //Récupérer les "children" de props.
    const data = props.data

    //Créer une variable pour mettre à "false" la présence du chevron.
    const [toggle, setToggle] = useState(false);

    //Au clic elle passera à "true" ligne 17.
    //Si "toggle" "true" alors "arrow_up" sinon "arrow_down" ligne 19.
    //Si "toggle" est "true" et "arrow_up" alors afficher le texte sinon cacher le texte pour "arrow_down" ligne 22.
    return (
        <>
            <div className={toggle ? 'about_content' : 'about_content_hidden'}>
                <div className="about_content_title" onClick={()=> setToggle(!toggle)}>
                    <p>{data.title}</p>
                    <img src={Arrow} className={toggle ? "arrow_up" : "arrow_down"} alt='Chevron'/>
                </div>
                <p className={toggle ? 'about_content_text' : 'hidden'}> 
                    {data.content}
                </p>
            </div>
        </>
    );
}

export default DropDown0;