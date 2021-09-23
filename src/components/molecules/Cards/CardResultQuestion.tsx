import React, { FC } from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    text: string;
    response: boolean;
}

const CardResultQuestion: FC<Props> = ({ text, response }) => {
    return (
        <div className="card-result-question">
            {
                response ?
                    <FontAwesomeIcon icon={faCheck} />
                    :
                    <FontAwesomeIcon icon={faTimes} />
            }
            <div>{text}</div>
        </div>
    );
};

export default CardResultQuestion;