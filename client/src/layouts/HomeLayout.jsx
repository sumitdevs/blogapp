import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomeLayout({children}) {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default HomeLayout