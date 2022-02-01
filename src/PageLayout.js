import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
  return <div>
      <NavBar/>
        <div>
            <Outlet/>
        </div>
      <Footer/>
  </div>;
}
