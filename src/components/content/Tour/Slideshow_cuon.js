import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Itemtour from "./Itemtour";

const Slideshow_cuon = () =>{
    return(
        <>
        <Slider
        dots={false}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
      >
       <Itemtour />     
       <Itemtour />     
       <Itemtour />     
       <Itemtour />     
       <Itemtour />     
      </Slider>
        </>
    )
}

export default Slideshow_cuon