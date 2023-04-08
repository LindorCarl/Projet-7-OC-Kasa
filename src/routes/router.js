import React from 'react';
import HomePage from '../pages/HomePage';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import AccommodationPage from '../pages/AccomodationPage';
import ErrorPage from '../pages/ErrorPage';
import AboutPage from '../pages/AboutPage';

//Fonction pour copier la "navbar" et le "footer" , "outlet"
//concerne toutes les nouvelles données qu'on ajoutera.
const HeaderFooterLayout = () => {
    return <>
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
}


//Pour créer les routes.
export const router = createBrowserRouter([
    {
        errorElement:<ErrorPage/>,
        element: <HeaderFooterLayout />,
        children: [
            {
                path: "/",
                element : <HomePage />
            },
            {
                path: "/accomodation",
                element: <AccommodationPage />
            },
            {
                path:"/about",
                element:<AboutPage/>
            }
        ]
    }
]);
