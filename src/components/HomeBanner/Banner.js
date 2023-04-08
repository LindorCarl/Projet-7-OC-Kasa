import React from 'react';
import HomeImg from "../../assets/IMG.png"

function Banner() {
    return (
        <div className='banner'>
            <img src={HomeImg} alt='Bannière'/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;