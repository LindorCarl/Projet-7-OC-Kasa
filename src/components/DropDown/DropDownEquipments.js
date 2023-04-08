import React, { useState } from 'react';
import Arrow from "../../assets/Arrow.png"

function AccomodationEquipments(props) {

    const [toggle, setToggle] = useState(false);

    const flat = props.flat;
    return (
        <>
            <div className={toggle ? 'box_main' : 'box_main_hidden'}>
                <p className='box_main_header' onClick={()=> setToggle(!toggle)}>
                    Equipements
                    <img src={Arrow} className={toggle ? "arrow_up" : "arrow_down"} alt='Chevron'/>
                </p>
                <p className={toggle ? 'box_main_text' : 'hidden'}>
                    {flat.equipments.map((equipment) => (
                        <span key={equipment}>{equipment}<br/></span>
                    ))}
                </p>
            </div>
        </>
    );
}

export default AccomodationEquipments;