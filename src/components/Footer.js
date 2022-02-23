import React from "react";
import { Link } from "react-router-dom";
import FacebookLogo from "assets/icons/FacebookLogo";
import TwitterLogo from "assets/icons/TwitterLogo";
import InstagramLogo from "assets/icons/InstagramLogo";

function Footer() {
  return (
    <div className='bg-quartiary text-white font-primary pt-4 w-full pb-5'>
      <h1 className='text-3xl text-center w-full mb-4'> XPLORIT</h1>
      <div className='flex flex-wrap w-3/4 m-auto'>
        <div className='w-full xl:w-1/4 mb-2'>
          <h2 className='text-xl text-center font-bold mb-5'>Sobre Nosotros</h2>
          <p className='text-xs text-justify w-full'>
            Somos una pequeña comunidad de viajeros, queremos compartir las
            experiencia de nuestros viajes, creemos que existen muchos lugares
            que valen la pena conocer por eso creamos esta aplicacion en la cual
            puedes subir tu lugar favorito y comentar tus experiencias para que
            mas personas puedan conocer tu lugar favorito.
          </p>
        </div>
        <div className=' w-full xl:w-1/4 mt-5'>
          <h2 className='text-xl text-center font-bold mb-1'> Links </h2>
          <ul className='text-center'>
            <li>Mi cuenta</li>
            <li>Rutas</li>
            <li>Lugares</li>
            <li>Home</li>
          </ul>
        </div>
        <div className='w-full xl:w-1/4 text-center mt-5'>
          <h2 className='text-xl text-center font-bold mb-1'>Contacto</h2>
          <p>contacto@Xplorit.com</p>
          <p> 55-123-4567 </p>
        </div>
        <div className='w-full xl:w-1/4'>
          <h2 className='text-xl text-center font-bold mt-5 mb-1'> Sociales</h2>
          <div className='flex justify-center'>
            <FacebookLogo width='28' height='28' padding='5' />
            <TwitterLogo width='28' height='28' />
            <InstagramLogo width='28' height='28' />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <h3 className='text-sm text-center mt-7 '>
          Xplorit todos los derechos reservados
        </h3>
      </div>
    </div>
  );
}

export default Footer;
