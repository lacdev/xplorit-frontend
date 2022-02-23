import React from 'react'
import StarHalf from 'assets/icons/StarHalf.jsx'
import { Link } from 'react-router-dom'
import Btncards from './Btncards'
import { Labels } from './Labels'
import StarRatingStatic from '../RatingStarStatic'

// lg:min-h-[490px]
// min-h-[470px]
// mx-8 my-4
// max-h-96 min-h-96
// max-w-2xl
// px-2
// py-2
// const classes = {
//   container:
//     'font-Poppins bg-white rounded-lg mx-8 my-4 drop-shadow-lg flex max-w-2xl max-h-96 rounded-t-lg  flex-col',
//   imgcont: 'h-24 w-full rounded-t-lg',
//   img: '  w-full object-fill rounded-t-lg',
//     'font-Poppins bg-white rounded-lg m-4 drop-shadow-lg flex w-2xl h-min rounded-t-lg flex-col',
//   imgcont: 'h-48 w-full rounded-t-lg',
//   img: 'w-full h-48 object-fill rounded-t-lg',
//   contcontainer: 'p-4',
//   title: 'text-lg font-bold py-2',
//   qualicontainer: 'flex items-center py-2',
//   qualification: 'text-md px-2 mt-1',
//   title: 'text-sm font-bold mb-1 sm:text-lg ',
//   qualicontainer: 'flex items-center mb-2',
//   qualification: 'text-sm ml-2 mt-1',
//   wraplabel: 'flex flex-wrap',
//   // label:'bg-tagscolor text-sm px-2 p-1 mr-2 my-2 rounded-full',
//   btncontainer: 'py-4',
//   btncard: 'w-32 h-10',
//   // btncontainer: 'py-1',
//   // 'w-32 h-10'
//   btncard: 'text-white ml-2 mt-2 px-4 py-1 rounded-full bg-secondary',
// }

const classes = {
  container:
    'font-Poppins bg-white rounded-lg m-4 drop-shadow-lg flex w-2xl h-min rounded-t-lg flex-col',
  // 'font-Poppins bg-white rounded-3xl mx-8 my-4 drop-shadow-md flex min-h-[470px] lg:min-h-[490px] flex-col max-h-[585px]',
  imgcont: 'h-48 w-full rounded-t-lg',
  img: 'w-full h-48 object-fill rounded-t-lg',
  contcontainer: 'p-4',
  title: 'text-sm font-bold mb-1 sm:text-lg ',
  qualicontainer: 'flex items-center mb-2',
  qualification: 'text-sm ml-2 mt-1',
  wraplabel: 'flex flex-wrap',
  // label:'bg-tagscolor text-sm px-2 p-1 mr-2 my-2 rounded-full',
  btncontainer: 'py-4',
  btncard: 'w-32 h-10',
  staricon: '',
}
function cards({ name, score, labels, images = [], id, typeofplace }) {
  const cardLink = `/${typeofplace}/${id}`

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
          {labels.map((label) => {
            return <Labels LabelText={`#${label}`} />
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
