import React, { useState } from "react";
// import FsLightbox from "fslightbox-react";

const Itemanh_home = () => {
    const [toggler, setToggler] = useState(false);
    return (
        <>
        <div className="itemanh_home">
            <img src='https://bocatvangtravel.com.vn/Uploads/images/Tour/Tien%20Thanh%20-mobifone-03082019/1%20(15).jpg' alt=''  onClick={() => setToggler(!toggler)} />
            <h3>Team building 19/10/2019 tại Mũi Né Phan Thiết</h3>
        </div>
            {/* <FsLightbox
                toggler={toggler}
                sources={[
                    "https://i.imgur.com/fsyrScY.jpg",
                    "https://i.imgur.com/fsyrScY.jpg",
                    "https://i.imgur.com/fsyrScY.jpg"
                ]}
            /> */}
        </>
    )
}

export default Itemanh_home