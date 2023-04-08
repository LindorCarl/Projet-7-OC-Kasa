import React from 'react';
import Navbar from '../components/Nav/Navbar';
import ErrorContent from '../components/ErrorContent/ErrorContent';
import Footer from '../components/Footer/Footer';

function ErrorPage() {
    return (
        <>
            <Navbar />
            <ErrorContent />
            <Footer />
        </>
    );
}

export default ErrorPage;