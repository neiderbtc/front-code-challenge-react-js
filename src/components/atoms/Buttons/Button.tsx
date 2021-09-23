import React, { FC } from 'react';

type Props = {
    text: string;
    primary?: boolean;
    secundary?: boolean;
    onClick: Function
}

const Button: FC<Props> = ({ text, primary, secundary, onClick }) => {
    return (
        <button type="button"
            onClick={() => onClick()} className={
                `btn 
            ${primary ? 'bg-primary text-white' : ' '}
            ${secundary ? 'bg-segundary text-black' : ' '}
            `}>
            {text}
        </button>
    )
}
export default Button;