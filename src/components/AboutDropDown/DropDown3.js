import React, { useState } from 'react';
import Arrow from "../../assets/Arrow.png"

function DropDown3(props) {
    
    const data = props.data
    const [toggle, setToggle] = useState(false);

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

export default DropDown3;