import BigTitle from 'components/Common/BigTitle';
import Btncards from 'components/Common/Btncards';
import React from 'react';
import { Link } from 'react-router-dom';
import travelSearch from 'assets/img/travelSearch.png';

const classes = {
  parentcon:'flex align-middle h-screen',
  maincon:'flex w-full justify-center bg-gradient-to-b from-[#B9FFF2] items-center',
  infocon:'flex-col text-center',
  btn:'py-2 my-10' ,
  space:'flex justify-center',
}

export default function NotFoundPage() {
  return <div className={classes.parentcon}>
  <main className={classes.maincon}>
    <div className={classes.infocon}>
      <img src={travelSearch} alt=''></img>
      <BigTitle bigTitleText='Parece que aquí no está lo que buscas'/>
      <Link to='/'>
        <Btncards className={classes.btn }buttonText= "Regresa al Inicio"/><br></br>
      </Link>
      <h4>El lugar que perfecto sigue allá afuera</h4><br></br>
      <div className={classes.space}>
      </div>
    </div>
  </main>
</div>;
}