import React from 'react';
import AddImageDashboard from 'assets/icons/AddImageDashboard'
import Btncards from 'components/Common/Btncards';

const classes = {
  parentcon:'flex-col mx-auto text-center',
  text:'text-xl font-semibold',
  filecon:'flex justify-center px-20 py-10 bg-gray-200 rounded my-6',
  btnadd:'py-1 mb-10' ,
  btnbann:'py-1',
}

export default function DashboardEdit() {
  return <div className={'flex-col mx-auto text-center'}>
      <p className={classes.text} >Cambiar foto de usuario</p>
      <div className={classes.filecon}>
        <AddImageDashboard height='50' width='50'/>
      </div>
      <Btncards className={classes.btnadd}buttonText='Agregar imagen'/>
      <p className={classes.text}>Cambiar foto del banner</p>
      <div className={classes.filecon}>
        <AddImageDashboard height='50' width='50'/>
      </div>
      <Btncards className={classes.btnbann }buttonText='Agregar imagen'/>
          

  </div>;
}
