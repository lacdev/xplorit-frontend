import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Btncards from './Common/Btncards';
import NavBarLogo from './NavBarComponents/NavBarLogo';
import Titles from './NavBarComponents/Titles';

const navStyle = {
  beforeScroll : 'font-Poppins inline-flex w-full justify-around fixed bg-none pt-4 z-10',
  afterScroll : 'font-Poppins inline-flex w-full justify-around fixed bg-white pt-4 z-10 shadow',
  textBefore: 'my-4 mx-10 font-semibold text-[20px] hover:underline text-white',
  textAfter: 'my-4 mx-10 font-semibold text-[20px] hover:underline text-black'
}

export default function NavBar() {
  const [navBarColor, setNavBarColor] = useState(navStyle.beforeScroll)
  const [navBarText, setNavBarText] = useState(navStyle.textBefore)
  
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  const listenScrollEvent = (event) => {
    if (window.scrollY > 500) {
      setNavBarColor(navStyle.afterScroll)
      setNavBarText(navStyle.textAfter)
    } else {
      setNavBarColor(navStyle.beforeScroll)
      setNavBarText(navStyle.textBefore)
    }
  }

  // const listenScrollEvent2 = (event) => {
  //   if (window.scrollY > 600) {
  //     setNavBarText(navStyle.textAfter)
  //   } else {
  //     setNavBarText(navStyle.textBefore)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent2)
  // })

  return <nav className={navBarColor}>
      <Link to='/'>
        <NavBarLogo/>
      </Link>
      <Link to='/'>
        <Titles textColors={navBarText} menu="Home"/>
      </Link>
      <Link to='/route'>
        <Titles textColors={navBarText} menu="Rutas"/>
      </Link>
      <Link to='/places'>
        <Titles textColors={navBarText} menu="Lugares"/>
      </Link>
      <Titles textColors={navBarText} menu="Acerca de"/>
      <Link to="/LogIn" >
        <Btncards className='mt-3 py-2'buttonText="Iniciar sesión"/>
      </Link>
  </nav>;
}