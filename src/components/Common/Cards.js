import React from 'react'
import StarHalf from 'assets/icons/StarHalf.jsx'
import { Link } from 'react-router-dom'
import Btncards from './Btncards'
import { Labels } from './Labels'

// lg:min-h-[490px]
// min-h-[470px]
// mx-8 my-4
// max-h-96 min-h-96
// max-w-2xl
// px-2
// py-2
const classes = {
  container:
    'font-Poppins bg-white rounded-lg m-4 drop-shadow-lg flex w-2xl h-min rounded-t-lg flex-col',
  imgcont: 'h-48 w-full rounded-t-lg',
  img: 'w-full h-48 object-fill rounded-t-lg',
  contcontainer: 'p-4',
  title: 'text-sm font-bold mb-1 sm:text-lg ',
  qualicontainer: 'flex items-center mb-2',
  qualification: 'text-sm ml-2 mt-1',
  wraplabel: 'flex flex-wrap',
  // label:'bg-tagscolor text-sm px-2 p-1 mr-2 my-2 rounded-full',
  // btncontainer: 'py-1',
  // 'w-32 h-10'
  btncard: 'text-white ml-2 mt-2 px-4 py-1 rounded-full bg-secondary',
}
function cards({ name, score, labels, images = [], id, typeofplace }) {
  const cardLink = `/${typeofplace}/${id}`

  return (
    <div className={classes.container}>
      <div className={classes.imgcont}>
        <img className={classes.img} src={images[0]} alt="" />
      </div>

      <div className={classes.contcontainer}>
        <h4 className={classes.title}>{name}</h4>
        <div className={classes.qualicontainer}>
          <StarHalf width="28" height="28" />
          <p className={classes.qualification}>{score}</p>
        </div>

        <div className={classes.wraplabel}>
          {labels.map((label) => {
            return <Labels LabelText={`#${label}`} />
          })}
        </div>
        {/* <div className={classes.btncontainer}> */}
        <Link to={cardLink}>
          {/* <Btncards className={classes.btncard} name="Visitar" /> */}
          <button className={classes.btncard}>Visitar</button>
        </Link>
        {/* </div> */}

        {/* <div className={classes.btncontainer}>
          <Link to={cardLink}>
            <Btncards className={classes.btncard} name="Visitar" />
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default cards
