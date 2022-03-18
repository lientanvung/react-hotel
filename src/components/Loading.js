import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif';
export default function Loading() {
    return (
        <div className="loading">
           <h4>Đang tải dữ liệu phòng...</h4>  
           <img  src={loadingGif} alt="tải vui lòng đợi"/>  
        </div>
    )
}
