import Comments from "components/Common/Comments";
import ImageSlider from "components/Common/ImageSlider";
import { SliderElements } from "components/Common/SliderElements";
export default function RoutePage() {
  return (
  <div>
    <ImageSlider sildes={SliderElements}/>
   <Comments/>
  </div>
    
  );
}
