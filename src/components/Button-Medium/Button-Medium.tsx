
import React from "react";
import './button-medium.scss'

interface ButtonProps{
    title: string;
    backgroundColor: string;
    textColor: string;
    hoverBackgroundColor: string;
    activeBackgroundColor: string;
    hoverTextColor: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} 

const ButtonMedium: React.FC<ButtonProps> = ({
    title,
    backgroundColor,
    textColor,
    hoverBackgroundColor,
    hoverTextColor,
    activeBackgroundColor,
    onClick
    }) => {

    const buttonStyle = {
        '--background-color': backgroundColor,
        '--text-color': textColor,
        '--hover-background-color': hoverBackgroundColor,
        '--active-background-color': activeBackgroundColor,
        '--hover-text-color': hoverTextColor,

    } as React.CSSProperties;

    return (
        
        <button onClick={onClick} className="button-medium" style={buttonStyle}>
            <p>{title}</p>
        </button>

    )
}

export default ButtonMedium;