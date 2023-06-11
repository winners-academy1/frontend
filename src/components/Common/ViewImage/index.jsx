import React, { useRef } from 'react';
import { Link , useNavigate } from "react-router-dom";
import "./index.css";
function ViewImage({img, setState}) {
    const imageRef = useRef();
    const handleClickOutsideImage = (event) => {
        if (!imageRef.current.contains(event.target)) {
            // Handle click outside image here
            setState(false);
        }
    };
	return (
		<>
            <div className="view-image-component" onClick={handleClickOutsideImage}>
                <img src={img} alt="image" ref={imageRef}/>
            </div>
		</>
	);
}

export default ViewImage;