import React from "react";
import FacebookLogo from "assets/icons/FacebookLogo";
import TwitterLogo from "assets/icons/TwitterLogo";
import InstagramLogo from "assets/icons/InstagramLogo";

export default function Footer() {
  return (
    <div className='font-primary text-center'>
      <footer className='bg-quartiary text-white pt-4'>
        <div>
          <h1 className='text-4xl mb-5 font-bold '>Xplorit</h1>
        </div>
        <div className='flex mx-[7%]'>
          <div className='max-w-[30%] p-5 flex-1 sm:w-full'>
            <h3 className='text-center text-xl'>Acerca de </h3>
            <p className='text-justify mt-3 text-xs '>
              Somos una pequeña comunidad de viajeros, queremos compartir las
              experiencia de nuestros viajes, creemos que existen muchos lugares
              que valen la pena conocer por eso creamos esta aplicacion en la
              cual puedes subir tu lugar favorito y comentar tus experiencias
              para que mas personas puedan conocer tu lugar favorito.{" "}
            </p>
          </div>
          <div className='max-w-[25%] p-5 flex-1'>
            <h3 className='text-center text-xl'>Links</h3>
            <ul className='text-center mt-3'>
              <Link to='/'>
                <li className='mb-1 text-sm cursor-pointer'> Home </li>
              </Link>
              <Link to='/profile/routes'>
                <li className='mb-1 text-sm cursor-pointer'> Mi Cuenta </li>
              </Link>
              <Link to='/places'>
                <li className='mb-1 text-sm cursor-pointer'> Lugares </li>
              </Link>
              <Link to='/routes'>
                <li className='mb-1 text-sm cursor-pointer'> Routes </li>
              </Link>
            </ul>
          </div>
          <div className=' max-w-[25%] p-5 flex-1'>
            <h3 className='text-center text-xl'> Contacto </h3>
            <p className='mt-3  text-center text-sm'> contacto@Xplorit.com</p>
            <p className='text-center mt-3 text-sm'> 55-123-4567 </p>
          </div>
          <div className=' max-w-[25%] p-5 flex-1'>
            <h3 className='text-center text-xl'> Sociales </h3>
            <div className=' flex  mt-3 justify-center'>
              <FacebookLogo width='28' height='28' padding='5' />
              <TwitterLogo width='28' height='28' />
              <InstagramLogo width='28' height='28' />
            </div>
            <div className='mt-15'>
              <p className='font-bold text-xs'> Declaracion de Privacidad</p>
              <p className='font-bold text-xs'> Terminos y Condiciones</p>
            </div>
          </div>
        </div>
        <div className='border border-t-gray-50'>
          <p className='my-3 font-bold'>
            {" "}
            Xplorit todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
