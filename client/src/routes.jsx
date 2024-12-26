import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import Home from './pages/Home';

const routes = createBrowserRouter([
   {
    path: '/',
    element: <HomeLayout/>,
    children:[
        { path: '', element: <Home /> },
    ],
   },
]);

export default routes