import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Btncards from './Common/Btncards';
import NavBarLogo from './NavBarComponents/NavBarLogo';
import Titles from './NavBarComponents/Titles';

const navStyle = {
  beforeScroll : 'font-Poppins inline-flex w-full justify-around fixed bg-none pt-4 z-10',
  afterScroll : 'font-Poppins inline-flex w-full justify-around fixed bg-white pt-4 z-10',
  textBefore: 'my-4 mx-10 font-semibold text-[20px] hover:underline text-white',
  textAfter: 'my-4 mx-10 font-semibold text-[20px] hover:underline text-black'
}

export default function NavBar() {
  const [navBarColor, setNavBarColor] = useState(navStyle.beforeScroll)
  const [navBarText, setNavBarText] = useState(navStyle.textBefore)

  const listenScrollEvent = (event) => {
    if (window.scrollY > 600) {
      setNavBarColor(navStyle.afterScroll)
    } else {
      setNavBarColor(navStyle.beforeScroll)
    }
  }

  const listenScrollEvent2 = (event) => {
    if (window.scrollY > 600) {
      setNavBarText(navStyle.textAfter)
    } else {
      setNavBarText(navStyle.textBefore)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent2)
  })

  return <div className={navBarColor}>
      <NavBarLogo/>
      <Titles textColors={navBarText} menu="Home"/>
      <Titles textColors={navBarText} menu="Rutas"/>
      <Titles textColors={navBarText} menu="Lugares"/>
      <Titles textColors={navBarText} menu="Acerca de"/>
      <Link to="/LogIn" >
        <Btncards className='mt-4 py-2'buttonText="Iniciar sesión"/>
      </Link>
  </div>;
}