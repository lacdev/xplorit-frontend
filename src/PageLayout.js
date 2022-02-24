import Footer from 'components/Footer';
import NavBarS from 'components/NavBarComponents/NavBarS';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export default function PageLayout() {
  const location = useLocation();
  const renderFooter = setRenderFooter(location);
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
    '/searchplace',
    '/searchroute',
  ]

  const routeFound = noFooterRoute.indexOf(pathname?.toLowerCase()) 



  if(routeFound<0) {
    return true
  } else {
    return false
  }

}
