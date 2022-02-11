import Footer from 'components/Footer';
import NavBarS from 'components/NavBarComponents/NavBarS';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export default function PageLayout() {
  const location = useLocation();
  const renderFooter = setRenderFooter(location);
  console.log(location)
  return <div>
      <NavBarS/>
        <div>
            <Outlet/>
        </div>
        { renderFooter && 
          <Footer/>
        }
  </div>;
}

function setRenderFooter(location){
  const {pathname} = location;
  const noFooterRoute = [
    '/profile/routes',
    '/profile/likes',
  ]

  const routeFound = noFooterRoute.indexOf(pathname?.toLowerCase()) 
  console.log(routeFound)
  console.log(pathname)


  if(routeFound<0) {
    return true
  } else {
    return false
  }

}
