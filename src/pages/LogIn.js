import React from 'react';
import Inputs from 'components/Common/Inputs';
import BigTitle from 'components/Common/BigTitle';
import Btncards from 'components/Common/Btncards';

export default function LogIn() {
  return <div className='inline-flex w-full h-screen items-center'>
    <div className='w-1/2 h-full bg-img-01 bg-no-repeat bg-center'>
      <section className='flex h-full justify-center items-center '>
        <span className='font-primary font-bold bg-black/50 text-white text-[36px] text-center py-24'>Registrate para vivir las mejores experiencias de viaje</span>
      </section>
    </div>
    <div className='flex w-1/2 justify-center h-screen items-center'>
      <div className='flex-col w-1/2 justify-center'>
        <BigTitle className='p-6' bigTitleText='Xplorit'/>
        <BigTitle className='' bigTitleText='Iniciar Sesión'/>
        <p className='text-center px-10 mb-4'>Únete a nuestra comunidad de viajeros como tú que buscan planear, descubrir y compartir las mejores experiencias</p>
        <div className='flex-col w-full content-center'>
          <h4>Nombre de usuario</h4>
          <Inputs className='w-full h-auto' placeholderText="Escribe tu nombre de usuario"/>
          <h4>Contraseña</h4>
          <Inputs className='w-full h-auto' placeholderText="Escribe tu nombre contraseña"/>
        </div>
        <Btncards className='flex py-2' buttonText='Iniciar sesión'/><br></br>
        <span className='text-sm underline'>No tienes una cuenta? Regístrate</span>
      </div>
    </div>
  </div>;
}
