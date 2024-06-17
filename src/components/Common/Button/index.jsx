import React from "react";
import { Link , useNavigate } from "react-router-dom";
import "./index.css";
function Button({text, className, onClick}) {
    const navigate = useNavigate();

	return (
		<>
            <div className="button-component">
                <button style={{"--clr":"#39FF14"}} onClick={onClick}>
                    <span className={className}>{text}</span>
                    <i></i>
                </button>
            </div>
		</>
	);
}

export default Button;