import React from "react";
import Slider from "./Slider";
import Timkiemtour from "./Timkiemtour";

function Slideshow() {
  return (
    <div className="slide_show-wrap">
        <Timkiemtour />
      <Slider height="450px" auto speed={3000}>
        <div style={{ width: "100%", height: "300px", background: "pink" }}>
          <img src='https://www.anhdulich.vn/storage/sliders/ha-long-bay-copy.jpg' />
        </div>
        <div style={{ width: "100%", height: "300px", background: "beige" }}>
        <img src='https://vcdn-dulich.vnecdn.net/2020/01/08/sac-mau-cua-bien-vnexpress-1-6641-1578454676.jpg' />
        </div>
        <div style={{ width: "100%", height: "300px", background: "skyblue" }}>
        <img src='https://media.vov.vn/sites/default/files/styles/large/public/2020-09/99-thuyen_hoa.jpg' />
        </div>
        <div style={{ width: "100%", height: "300px", background: "yellow" }}>
        <img src='https://cdnmedia.baotintuc.vn/Upload/XjfgEPYM30O8z6jY3MHxSw/files/2019/10/310/Anh%201_Cau%20Vang%20-%20Sun%20World%20Ba%20Na%20Hills.jpg' />
        </div>
        <div style={{ width: "100%", height: "300px", background: "white" }}>
        <img src='https://iit.com.vn/files/images/Article/5-dieu-can-biet-khi-thiet-ke-website-du-lich.jpg' />
        </div>
        <div style={{ width: "100%", height: "300px", background: "cyan" }}>
        <img src='https://www.anhdulich.vn/storage/sliders/ha-long-bay-copy.jpg' />
        </div>        
      </Slider>
    </div>
  );
}

export default Slideshow
