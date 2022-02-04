import BigTitle from 'components/Common/BigTitle';
import Btncards from 'components/Common/Btncards';
import React from 'react';
import { Link } from 'react-router-dom';
import travelSearch from 'assets/img/travelSearch.png';

export default function NotFoundPage() {
  return <div className='flex align-middle h-screen'>
  <main className='flex w-full justify-center bg-gradient-to-b from-[#B9FFF2] items-center'>
    <div className='flex-col text-center'>
      <img src={travelSearch}></img>
      <BigTitle bigTitleText='Parece que aquí no está lo que buscas'/>
      <Link to='/'>
        <Btncards className='py-2 my-10' buttonText= "Regresa al Inicio"/><br></br>
      </Link>
      <h4>El lugar que perfecto sigue allá afuera</h4><br></br>
      <div className='flex justify-center'>
      </div>
    </div>
  </main>
</div>;
}