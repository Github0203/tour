import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Itemanh_home from "./Itemanh_home";

const Slideshow_anhhome = () =>{
    return(
        <>
        <Slider
        dots={false}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
      >
       <Itemanh_home />    
       <Itemanh_home />    
       <Itemanh_home />    
       <Itemanh_home />    
       <Itemanh_home />    
       <Itemanh_home />    
      </Slider>
        </>
    )
}

export default Slideshow_anhhome