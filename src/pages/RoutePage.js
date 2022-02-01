
import HeartFillOut from "assets/icons/HeartFillOut";
import StarComplete from "assets/icons/StarComplete";
import ThreePoints from "assets/icons/ThreePoints";
import Comments from "components/Common/Comments";
import ImageSlider from "components/Common/ImageSlider";
import { SliderElements } from "components/Common/SliderElements";
import Titles from "components/Titles";

const classes={
  tilteicon:'flex flex-row p-2',
  iconscon:'flex flex-row m-2'
}
function RoutePage() {
  return (
  <div>
    <ImageSlider slides={SliderElements}/>
    <div className={classes.tilteicon} >
      <Titles tag="h3" titleText="Nombre de Ruta"></Titles>
      <div className={classes.iconscon} >
       <HeartFillOut width='28' height='28' className=''/>
       <StarComplete width='28' height='28' className=''/>
       <ThreePoints width='58' height='28' className=''/>
      </div>
    </div>
   <Comments/>
  </div>
    
  );
}

export default RoutePage;