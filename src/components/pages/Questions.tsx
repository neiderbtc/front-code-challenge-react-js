import React, { useContext, FC } from 'react';
import GameContext from '../../context/GameContext';
import QuestionsChallenge from './QuestionsChallenge';
import ResultQuestions from './ResultQuestions';



const Questions: FC = () => {

    const { complete } = useContext(GameContext);

    return (
        complete ? <ResultQuestions /> : <QuestionsChallenge />
    );
};


export default Questions;