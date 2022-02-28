import react from "react";

const Itemtour = () =>{
return(
    <div className="itemtour">
    <div className="itemtour1">
    <div className="itemtour_top">
        <img src='https://media.travelmag.vn/files/daohung/2020/11/22/du-lich-1246.jpg' className="_1" />
        <img src='https://www.tsttourist.com/vnt_upload/news/10duongtourhotgiamden1trieu/icon-hot.png' className="_2"/>
</div>
    <div className="itemtour_button">
        <h3>Trải Nghiệm Tour Tà Đùng - Đà Lạt - 2022 (3N2Đ)</h3>
        <p className="thoi-gian"> 2N2Đ</p>
        <span className="phuong-tien">Phương tiện: Xe máy</span>
        <div className="dattouritem">
            <p>Giá: <span>2.000.000 VNĐ</span></p>
            <a className="btn_dattouritem">ĐẶT TOUR</a>
        </div>
</div>
        </div>
    <div className="itemtour2">
        <span className="itemtour2_h3">Trải Nghiệm Tour Tà Đùng - Đà Lạt - 2022 (3N2Đ)</span>
        <p>Phương tiện: Xe bus</p>
        <p>Thời gian: 2N2Đ</p>
        <p>Ngày đi: Thứ 2,4,6 hàng tuần</p>
        <p className="gia">
        <span className="giamoi">2.000.000 đ</span>
        <span className="giacu">6.000.000 đ</span>
        </p>
        <div className="dattour_itemtour2">
        <a className="btn_xemchitiet">XEM CHI TIẾT</a>
        <a className="btn_dattouritem">ĐẶT TOUR</a>            
        </div>
        </div>
    </div>
)
}

export default Itemtour