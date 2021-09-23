import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    text: string;
    primary?: boolean;
    secundary?: boolean;
    to: string;
}

const ButtonLink: FC<Props> = ({ text, primary, secundary, to }) => {
    return (
        <Link to={to} >
            <div className={
                `btn-link 
            ${primary ? 'bg-primary text-white' : ' '}
            ${secundary ? 'bg-segundary text-black' : ' '}
            `}>

                {text}
            </div>
        </Link>
    )
}
export default ButtonLink;