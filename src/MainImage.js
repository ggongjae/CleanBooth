import React from "react";
import "./MainImage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight,faCircleChevronLeft} from "@fortawesome/free-solid-svg-icons";

import img1 from "./사진/Frame 349.png";
const MainImage = () => {
    return(
        <div className="bigbox">
            <div className="image">
            <img src={img1} alt="Image" />
            <FontAwesomeIcon icon={faCircleChevronRight} />
            <FontAwesomeIcon icon={faCircleChevronLeft} />
            </div>
        </div>
    )
}

export default MainImage;