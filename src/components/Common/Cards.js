import React from 'react'
import StarHalf from 'assets/icons/StarHalf.jsx'
import { Link } from 'react-router-dom'
import Btncards from './Btncards'
import { Labels } from './Labels'
import StarRatingStatic from '../RatingStarStatic'

const classes = {
  container:
    'font-Poppins flex flex-col justify-between items-stretch bg-white rounded-lg m-4 drop-shadow-lg flex w-2xl h-[460px] rounded-t-lg flex-col max-w-sm ',
  imgcont: 'h-48 w-full rounded-t-lg',
  img: 'w-full h-48 object-fill rounded-t-lg',
  contcontainer: 'p-4 h-full flex flex-col justify-evenly',
  title: 'text-2xl font-bold mb-1 sm:text-lg ',
  qualicontainer: 'flex items-center mb-2',
  qualification: 'text-sm ml-2 mt-1',
  wraplabel: 'flex flex-wrap',
  btncontainer: 'py-4',
  btncard: 'px-6 py-1',
  staricon: '',
}
function cards({ name, score, labels, images = [], id, typeofplace }) {
  const cardLink = `/${typeofplace}/${id}`

  let number = 2

  return (
    <div className={classes.container}>
      <Link to={cardLink}>
        <div className={classes.imgcont}>
          <img className={classes.img} src={images[0]} alt="" />
        </div>
      </Link>

      <div className={classes.contcontainer}>
        <Link to={cardLink}>
          <h4 className={classes.title}>{name}</h4>
        </Link>

        <div className={classes.qualicontainer}>
          <StarRatingStatic
            width="28"
            height="28"
            className={classes.staricon}
            ratingValue={score}
          />
          <p className={classes.qualification}>{score}</p>
        </div>

        <div className={classes.wraplabel}>
          {labels.map((label, index) => {
            return index <= number ? <Labels LabelText={`#${label}`} /> : null
          })}
        </div>

        <div className={classes.btncontainer}>
          <Link to={cardLink}>
            <Btncards className={classes.btncard} name="Visitar" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default cards
