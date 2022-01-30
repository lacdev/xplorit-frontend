import BigTitle from 'components/Common/BigTitle';
import Btncards from 'components/Common/Btncards';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return <div className='flex align-middle h-screen'>
    <main className='flex w-full justify-center bg-gradient-to-b from-[#B9FFF2] items-center'>
      <div className='flex-col text-center'>
        <BigTitle bigTitleText='Regístrate para calificar'/>
        <Link to='/login'>
          <Btncards className='py-2 my-10' buttonText= "Iniciar sesión"/><br></br>
        </Link>
        <h4>Aún no tienes cuenta?</h4><br></br>
        <div className='flex justify-center'>
          <Link to='/signup'>
            <h4 className='underline'>Da clic aquí</h4>
          </Link>
        </div>
      </div>
    </main>
  </div>;
}
