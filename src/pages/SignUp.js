import React from 'react';
import Inputs from 'components/Common/Inputs';
import BigTitle from 'components/Common/BigTitle';
import Btncards from 'components/Common/Btncards';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return <div className='inline-flex w-full h-screen items-center'>
    <div className='w-1/2 h-full bg-img-01 bg-no-repeat bg-center'>
      <section className='flex h-full justify-center items-center '>
        <span className='font-primary font-bold bg-black/50 text-white text-[36px] text-center py-24'>Registrate para vivir las mejores experiencias de viaje</span>
      </section>
    </div>
    <div className='flex w-1/2 justify-center h-screen items-center'>
      <div className='flex-col w-1/2 justify-center'>
        <Link to='/'>
          <BigTitle className='p-6' bigTitleText='Xplorit'/>
        </Link>
        <BigTitle className='' bigTitleText='Crear cuenta'/>
        <p className='text-center px-10 mb-4'>Únete a nuestra comunidad de viajeros como tú que buscan planear, descubrir y compartir las mejores experiencias</p>
        <div className='flex-col w-full content-center'>
          <h4>Nombre de usuario</h4>
          <Inputs className='w-full h-auto' placeholderText="Escribe tu nombre de usuario"/>
          <h4>Email</h4>
          <Inputs className='w-full h-auto' placeholderText="Escribe tu email"/>
          <h4>Contraseña</h4>
          <Inputs className='w-full h-auto' placeholderText="Escribe tu contraseña"/>
          <h4>Confirma tu contraseña</h4>
          <Inputs className='w-full h-auto' placeholderText="Escribe de nuevo tu contraseña"/>
        </div>
        <Btncards className='flex py-2 m-auto' buttonText='Regístrate'/><br></br>
        <Link to='/login'>
          <p className='text-sm underline text-center'>Ya tienes cuenta? Inicia sesión aquí</p>
        </Link>
      </div>
    </div>
  </div>;
}
