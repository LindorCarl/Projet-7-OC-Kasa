import React from 'react';
import Home from '../pages/Home/Home';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import Accommodation from '../pages/Accomodation/Accomodation';
import Error from '../pages/Error/Error';
import About from '../pages/About/About';

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
        errorElement:<Error/>,
        element: <HeaderFooterLayout />,
        children: [
            {
                path: "/",
                element : <Home />
            },
            {
                path: "/accomodation",
                element: <Accommodation />
            },
            {
                path:"/about",
                element:<About/>
            }
        ]
    }
]);
