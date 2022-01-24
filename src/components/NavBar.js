import React from 'react';
import Btncards from './Common/Btncards';
import NavBarLogo from './NavBarComponents/NavBarLogo';
import Titles from './NavBarComponents/Titles';

export default function NavBar() {
  return <div className='inline-flex w-full justify-around mx-8 fixed bg-none mt-4'>
      <NavBarLogo/>
      <Titles menu="Home"/>
      <Titles menu="Rutas"/>
      <Titles menu="Lugares"/>
      <Titles menu="Acerca de"/>
      <Btncards buttonText="Iniciar sesión"/>
  </div>;
}
