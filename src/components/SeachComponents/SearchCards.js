import { Link } from 'react-router-dom';
//Components
import Titles from 'components/Common/Titles';
import { Labels } from '../Common/Labels';
import Btncards from '../Common/Btncards';
//Img & Icons
import StarComplete from 'assets/icons/StarComplete';
import HeartFillOut from 'assets/icons/HeartFillOut';

const classes={
    articlecon:'py-2 px-4',
    infocon:'flex',
    img:'h-32 w-44 object-cover object-center rounded-md',
    detailscon:'flex flex-col pl-2',
    labelscon:'flex flex-wrap my-2',
    ubitextcon:'py-3',
    ubitext:'text-xs break-words',
    btn:'py-1',
    iconcon:'ml-auto',
    starticon:'mt-5',
    starttext:'text-xs text-center',   
 }
function SearchCards({id, name, score, labels, images=[],  type, address}) {
    const cardLink = `/${type}/${id}`
    return (
      <article className={classes.articlecon} key={id} >
        <div className={classes.infocon}>
        <Link to={cardLink}>
          <img src={images[0]} alt="search-img" className={classes.img} />
          </Link>
          <div className={classes.detailscon}>
            <Link to={cardLink}>
               <Titles tag="h6" titleText={name}></Titles>
            </Link>
            <div className={classes.labelscon}>
            {labels.map((label) => {
                  return <Labels LabelText={`#${label}`}/>
           })}
            </div>
            <div className={classes.ubitextcon}>
              <p className={classes.ubitext}>{address}</p>
            </div>
            <div>
              <Link to={cardLink}>
                <Btncards
                  buttonText="Explorar"
                  className={classes.btn}
                ></Btncards>
              </Link>
            </div>
          </div>
          <div className={classes.iconcon}>
            <HeartFillOut width="30px" height="30px" />
            <StarComplete
              width="30px"
              height="30px"
              className={classes.starticon}
            />
            <p className={classes.starttext}>{score}</p>
          </div>
        </div>
      </article>
    );
}

export default SearchCards