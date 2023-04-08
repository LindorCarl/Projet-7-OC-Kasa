import React from 'react';
import BannerAbout from "../../assets/AboutBanner.png"

function AboutBanner() {
    return (
        <>
            <div className='about_banner'>
                <img src={BannerAbout} alt='Bannière'/>
            </div>
        </>
    );
}

export default AboutBanner;