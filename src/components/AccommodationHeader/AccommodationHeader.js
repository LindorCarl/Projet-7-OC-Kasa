import React from 'react';

function AccommodationHeader(props) {
    //Récupérer les enfants dans "props" puis selection de la key qu'on veut afficher.
    const flat = props.flat;

    return (
        <>
            <div className='housing'>
                <div className='housing_title'>
                    <h1>{flat.title}</h1>
                    <h2>{flat.location}</h2>

                    <div className='housing_tag'>
                        {flat.tags.map((tag) => (
                            <div key={tag} className='housing_tag_text'>{tag}</div>
                        ))}
                    </div>
                </div>

                <div className='housing_host'>
                    <div className='housing_host_name'>
                        <p>
                            {flat.host.name}
                        </p>
                        <div className='housing_host_circle'>
                            <img src={flat.host.picture} alt=" Logo de l'hôte"/>
                        </div>
                    </div>
                    <div className='housing_rate'>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <i key={num} className= {flat.rating >= num ? "housing_rate_red" : ""}>
                               <i className="fa-solid fa-star"/>
                            </i>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccommodationHeader;
