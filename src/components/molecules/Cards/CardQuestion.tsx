import React, { FC } from 'react';
import Button from '../../atoms/Buttons/Button';

type Props = {
    title: string;
    question: string;
    onClick: Function
}

const CardQuestion: FC<Props> = ({ title, question, onClick }) => {
    return (
        <div className="card">
            <div className="card-question">
                <div className="card-category-title">
                    {title}
                </div>
                <div className="card-question-content">
                    {
                        question
                    }
                </div>
            </div>
            <div className="buttons">
                <Button onClick={()=> onClick("False")} secundary text="False" />
                <Button onClick={()=> onClick("True")} primary text="True" />
            </div>
        </div>
    );
};

export default CardQuestion;