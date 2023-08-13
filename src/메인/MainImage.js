import React, { useState } from "react";
import "./MainImage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import img1 from "../사진/Frame 349.png";
import img2 from "../사진/Frame 361.png";
import img3 from "../사진/Frame 362.png";
import img4 from "../사진/Frame 363.png";
import img5 from "../사진/Frame 364.png";
import img6 from "../사진/Frame 365.png";
import img7 from "../사진/Frame 366.png";

const MainImage = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7];
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
        const nextImage = (currentImage + 1) % images.length;
        setCurrentImage(nextImage);
    }

    const handleBeforeImage = () => {
        const beforeImage = (currentImage - 1 + images.length) % images.length;
        setCurrentImage(beforeImage);
    }


    return (
        <div className="bigbox">
            <div className="image">
                <img
                    src={images[currentImage]}
                    alt="Image"
                />
                <div className="image_button">
                    <button className="image_left" onClick={handleBeforeImage}><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
                    <button className="image_number">  {currentImage + 1} / {images.length}</button>
                    <button className="image_right" onClick={handleNextImage}><FontAwesomeIcon icon={faCircleChevronRight} /></button>
                </div>
            </div>
        </div>
    );
}

export default MainImage;
