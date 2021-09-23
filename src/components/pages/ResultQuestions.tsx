import React, { useContext, useState, FC } from 'react';
import { Redirect } from 'react-router';
import GameContext from '../../context/GameContext';
import Button from '../atoms/Buttons/Button';
import CardResultQuestion from '../molecules/Cards/CardResultQuestion';

const ResultQuestions: FC = () => {

    const { questionsResponses, total, goodResponses, resetGame } = useContext(GameContext);
    const [goHome, setGoHome] = useState<boolean>(false);

    const changeGoHome = () => setGoHome(true);
    return (
        <div className="container height-100">
            <div className="title-page">
                {`You score \n ${goodResponses}/${total}`}
            </div>
            {goHome ? <Redirect to="/" /> :
                <div className="result-container">
                    {
                        questionsResponses.map((item, index) => (

                            <CardResultQuestion
                                key={index}
                                text={item.question}
                                response={item.response}
                            />
                        ))
                    }
                </div>

            }
            <div className="buttons-results">
                <Button primary text="PLAY AGAIN?" onClick={resetGame} />
                <Button secundary text="GO TO START?" onClick={changeGoHome} />
            </div>

        </div>
    );
};

export default ResultQuestions;