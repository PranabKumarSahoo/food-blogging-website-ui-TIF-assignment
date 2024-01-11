import React from 'react';

const Button = ({ text, backgroundColor, textColor, borderColor, onClick, disabled }) => {

    const buttonClasses = `flex justify-center items-start gap-2 lg:px-7 lg:py-4 px-3 py-3 border font-bold lg:text-base text-[11px] leading-none rounded-full
        ${backgroundColor ? `bg-${backgroundColor}` : 'bg-[#E23744]'} ${textColor ? `text-${textColor}` : 'text-black'} border-${borderColor || 'transparent'}`;

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;