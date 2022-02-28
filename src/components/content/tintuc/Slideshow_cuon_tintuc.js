import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Tintuchome from "./Tintuchome";

const Slideshow_cuon_tintuc = () =>{
    return(
        <>
        <Slider
        dots={false}
        slidesToShow={2}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
      >
       <Tintuchome />  
       <Tintuchome />  
       <Tintuchome />  
       <Tintuchome />  
      </Slider>
        </>
    )
}

export default Slideshow_cuon_tintuc