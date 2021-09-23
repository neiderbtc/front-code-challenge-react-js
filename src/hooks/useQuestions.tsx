import { useState } from 'react';
import { get } from '../services/http';

type TQuestion = {
    category: string;
    type: boolean;
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}



const useQuestions = () => {
    const [questions, setQuestions] = useState<TQuestion[]>([]);

    const getQuestions = (difficulty?: string) => {

        get(`api.php?amount=10&type=boolean${difficulty ? `&difficulty=${difficulty}` : ''} `)
            .then((response: { response_code: number; results: TQuestion[] }) => {
                if (response) setQuestions(response.results)
            });
    }

    return { questions, getQuestions };
};

export default useQuestions;