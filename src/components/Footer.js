import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogo from 'assets/icons/FacebookLogo';
import TwitterLogo from 'assets/icons/TwitterLogo';
import InstagramLogo from 'assets/icons/InstagramLogo';

const classes = {
  parentcon:'font-primary text-center',
  footerdesing:'bg-quartiary text-white pt-4',
  title:'text-4xl mb-5 font-bold ',
  aboutcon:'flex mx-[7%]',
  abouttitlecon:'max-w-[30%] p-5 flex-1 sm:w-full',
  aboutitle:'text-center text-xl',
  description:'text-justify mt-3 text-xs ',
  linkscon:'max-w-[25%] p-5 flex-1',
  linkstitle:'text-center text-xl',
  listlinks:'text-center mt-3',
  li:'mb-1 text-sm cursor-pointer',
  contactcon:'max-w-[25%] p-5 flex-1',
  contacttitle:'text-center text-xl',
  emailcontact:'mt-3 text-center text-sm',
  telcontact:'text-center mt-3 text-sm',
  socialcon:'max-w-[25%] p-5 flex-1',
  socialtitle:'text-center text-xl',
  socialiconcon:'flex  mt-3 justify-center',
  extracon:'mt-15',
  extratext:'font-bold text-xs',
  logocon:'border border-t-gray-50',
  logotext:'my-3 font-bold',

}
function Footer() {
  return (
    <div className={classes.parentcon}>
      <footer className={classes.footerdesing}>
        <div>
          <h1 className={classes.title}>Xplorit</h1>
        </div>
        <div className={classes.aboutcon}>
          <div className={classes.abouttitlecon}>
            <h3 className={classes.aboutitle}>Acerca de </h3>
            <p className={classes.description}>
              Somos una pequeña comunidad de viajeros, queremos compartir las
              experiencia de nuestros viajes, creemos que existen muchos lugares
              que valen la pena conocer por eso creamos esta aplicacion en la
              cual puedes subir tu lugar favorito y comentar tus experiencias
              para que mas personas puedan conocer tu lugar favorito.{" "}
            </p>
          </div>
          <div className={classes.linkscon}>
            <h3 className={classes.linkstitle}>Links</h3>
            <ul className={classes.listlinks}>
              <Link to='/'>
                <li className={classes.li}> Home </li>
              </Link>
              <Link to='/profile/routes'>
                <li className={classes.li}> Mi Cuenta </li>
              </Link>
              <Link to='/places'>
                <li className={classes.li}> Lugares </li>
              </Link>
              <Link to='/routes'>
                <li className={classes.li}> Routes </li>
              </Link>
            </ul>
          </div>
          <div className={classes.contactcon}>
            <h3 className={classes.contacttitle}> Contacto </h3>
            <p className={classes.emailcontact}> contacto@Xplorit.com</p>
            <p className={classes.telcontact}> 55-123-4567 </p>
          </div>
          <div className={classes.socialcon}>
            <h3 className={classes.socialtitle}> Sociales </h3>
            <div className={classes.socialiconcon}>
              <FacebookLogo width='28' height='28' padding='5' />
              <TwitterLogo width='28' height='28' />
              <InstagramLogo width='28' height='28' />
            </div>
            <div className={classes.extracon}>
              <p className={classes.extratext}> Declaracion de Privacidad</p>
              <p className={classes.extratext}> Terminos y Condiciones</p>
            </div>
          </div>
        </div>
        <div className={classes.logocon}>
          <p className={classes.logotext}>
            {" "}
            Xplorit todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;