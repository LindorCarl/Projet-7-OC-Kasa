import React from 'react';
import FooterImg from "../../assets/footer.png"

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_img'>
                <img src={FooterImg} alt='Logo du footer' />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;