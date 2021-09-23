import React, { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import GameContext from '../../context/GameContext';
import { levels } from '../../services/levels';
import ButtonLink from '../atoms/Buttons/ButtonLink';


const Home: FC = () => {

    const [selectedValue, setSelectedValue] = useState("hard");
    const { resetGame, changeDifficulty } = useContext(GameContext);
    useEffect(() => {
        resetGame();
    }, [])

    useEffect(() => {
        changeDifficulty(selectedValue)
    }, [selectedValue])

    const onChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setSelectedValue(target.value)
    }

    return (

        <div className="container">
            <div className="title-page">
                Welcome to the Trivia Challenge
            </div>

            <div className="information-game">

                You will be presented with 10 True or False questions.

            </div>
            <div className="information-game">
                Can you score 100%?
            </div>
            <div className="container-select">
                <select onChange={onChange} >
                    {
                        levels.map((item, index) => (
                            <option key={index} value={item.value}>{item.name} </option>
                        ))
                    }
                </select>
            </div>
            <div className="button-start">
                <ButtonLink to="/questions" primary text="BEGIN" />
            </div>
        </div>
    );
};

export default Home;