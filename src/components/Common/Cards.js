import React from 'react'
import  StarHalf from 'assets/icons/startHalf'
import Btncards from './Btncards'

const classes={
    container:'font-Poppins bg-white w-cardWidth h-auto rounded-3xl m-4 drop-shadow-md flex flex-col',
    imgcont:'h-auto min-w-full  min-h-cardHeight',
    img:'rounded-t-lg  min-w-full min-h-cardHeight object-cover',
    contcontainer:'p-4',
    title:'text-lg font-bold py-2',
    qualicontainer:'flex items-center py-2',
    qualification:'text-md px-2 mt-1',
    wraplabel:'flex flex-wrap',
    label:'bg-tagscolor text-sm px-2 p-1 mr-2 my-2 rounded-full',
    btncontainer:'py-4',
}
function cards() {
    return (
      <div className={classes.container}>
        <div className={classes.imgcont}>
          <img
            className={classes.img}
            src="https://placekitten.com/408/287"
            alt="imagen_sample"
          />
        </div>
        <div className={classes.contcontainer} >
          <h4 className={classes.title}>Nombre de Lugar</h4>
          <div className={classes.qualicontainer} >
            <StarHalf width="28" height="28" />
            <p className={classes.qualification}>4.5</p>
          </div>

          <div className={classes.wraplabel} >
            <label className={classes.label}>Aventura</label>
            <label className={classes.label}>Familiar</label>
            <label className={classes.label}>Entretenimiento</label>
            <label className={classes.label}>Aire Libre</label>
          </div>
          <div className={classes.btncontainer} >
            <Btncards className="drop-shadow-lg" />
          </div>
        </div>
      </div>
    );
}

export default cards
