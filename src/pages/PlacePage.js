import Titles from 'components/Common/Titles';
import React from 'react';
import Inputs from 'components/Common/Inputs';
import Btncards from 'components/Common/Btncards';
const classes = {
  parentcon:'justify-center align-middle',
  titlecon:'flex break-words w-full justify-around p-4',
  container:'w-full h-screen max-h-[700px] bg-waterfall bg-no-repeat bg-cover',
  section:'flex h-full justify-center items-center bg-black/50',
  maincon:'w-5/6 justify-center inline-align-top text-center',
  btn:'py-1',
}
function PlacePage() {
  return (
    <div className={classes.parentcon}>
      <div className={classes.container}>
        <section className={classes.section}>
          <div className={classes.maincon} >
            <div className='mb-10'>
            <Titles
              tag="h1"
              titleText="Comienza a descubir rutas creadas por la comunidad"/>
            </div>
            <Inputs placeholderText='Escribe el nombre o palabra clave'/>
            <Btncards className={classes.btn} buttonText='Buscar'/>
          </div>
        </section>
      </div>
    </div>
  );
}
export default  PlacePage;