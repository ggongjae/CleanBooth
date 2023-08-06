import React from "react";
import "./MainImage.css"
import img1 from "./사진/Frame 349.png";
const MainImage = () => {
    return(
        <div className="bigbox">
            <div className="image">
            <img src={img1} alt="Image" />
            </div>
        </div>
    )
}

export default MainImage;