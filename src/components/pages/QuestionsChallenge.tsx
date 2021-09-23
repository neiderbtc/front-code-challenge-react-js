import React, { useContext, useEffect, FC } from 'react';
import GameContext from '../../context/GameContext';
import useQuestions from '../../hooks/useQuestions';
import CardQuestion from '../molecules/Cards/CardQuestion';

const QuestionsChallenge: FC = () => {
    const {
        currentQuestion,
        getQuestion,
        numberOfQuestions,
        saveResponse,
        total,
        setComplete,
        setQuestions,
        difficulty
    } = useContext(GameContext);

    const { getQuestions, questions } = useQuestions();

    useEffect(() => {
        getQuestions(difficulty);
    }, [])

    useEffect(() => {
        setQuestions(questions);
    }, [questions])

    const onClick = (response: string) => {
        saveResponse(response);
        const nextQuestion = numberOfQuestions + 1;
        if (nextQuestion < total) {
            getQuestion(nextQuestion);
            return true;
        }
        setComplete(true);
    }
    return (
        <div className="container">
            <div className="title-page">
                Front Coding Challenge
            </div>
            {currentQuestion ? <>
                <div className="subcontainer">
                    <CardQuestion onClick={onClick}
                        title={currentQuestion.category}
                        question={currentQuestion.question} />
                    <div className="paginate-question">
                        {`${numberOfQuestions + 1} / 10`}
                    </div>
                </div>
            </>
                : <div>cargando</div>
            }
        </div>
    );
};

export default QuestionsChallenge;