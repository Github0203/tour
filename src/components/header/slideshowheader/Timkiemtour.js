import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Timkiemtour = () =>{
    const [startDate, setStartDate] = useState(new Date());
        return (
            <div className='showtimkiem'>
                <h3>TÌM KIẾM TOUR</h3>
                <div className='luachontimkiemtour'>
                    <div className='optiontimkiem'>
                        <p>Nơi khởi hành</p>
                        <select value="Nơi khỏi hành">
                            <option value="1">Nơi khỏi hành</option>
                            <option value="2">Đà Lạt</option>
                            <option value="3">Đà Nẵng</option>
                            <option value="4">Hội An</option>
                            <option value="5">Hồ Chí Minh</option>
                            <option value="6">Nha Trang</option>
                            <option value="7">Phan Thiết</option>
                        </select>
                    </div>
                    <div className='optiontimkiem'>
                        <p>Loại Tour</p>
                        <select value="Chọn loại Tour">
                            <option value="1">Chọn loại Tour</option>
                            <option value="2">Tour trong nước</option>
                            <option value="3">Tour nước ngoài</option>
                        </select>
                    </div>
                    <div className='optiontimkiem'>
                        <p>Nơi đến</p>
                        <select value="Chọn nơi đến">
                            <option value="1">Chọn nơi đến</option>
                            <option value="2">Hoa Kỳ</option>
                            <option value="3">Canada</option>
                        </select>
                    </div>
                    <div className='optiontimkiem'>
                        <p>Ngày khởi hành</p>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className='optiontimkiem'>
                        <p>Giá Tour</p>
                        <select value="Chọn mức giá">
                            <option value="1">Chọn mức giá</option>
                            <option value="2">Dưới 1 triệu</option>
                            <option value="3">Từ 3 - 5 triệu</option>
                        </select>
                    </div>
                    <div className='optiontimkiem'>
                    <p>.</p>
                        <button className="buttontimkiemtour">
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>
        )
}

export default Timkiemtour
