import React from 'react';
import { Link } from 'react-router-dom';

function ErrorContent() {
    return (
        <>
            <div className='error'>
                <h2>404</h2>
                <p className='error_text'>Oups! La page que vous demandez n'existe pas.</p>
                <Link to = "/">
                    <p className='error_returnHome'>Retourner sur la page d’accueil</p>
                </Link>

            </div>
        </>
    );
}

export default ErrorContent;