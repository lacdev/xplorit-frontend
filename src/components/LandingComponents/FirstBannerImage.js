import React from 'react'
import travelingGirl from 'assets/img/travelingGirl.png'

const classes = {
  bodycon: 'align-middle w-full',
  infocon:
    'md:flex justify-center bg-gradient-to-b from-[#B9FFF2] py-10 items-center',
  title:
    'w-full md:w-1/4 m-auto mr-8 ml-8 text-5xl text-[#575A89] text-left font-bold ',
  img: 'w-full md:w-1/2 m-auto mt-16',
}
function FirstBannerImage() {
  return (
    <div className={classes.bodycon}>
      <section className={classes.infocon}>
        <h2 className={classes.title}>
          Explora las mejores rutas <br></br> compartidas por la comunidad
        </h2>
        <img
          className={classes.img}
          src={travelingGirl}
          alt="banner-firts"
        ></img>
      </section>
    </div>
  )
}
export default FirstBannerImage
