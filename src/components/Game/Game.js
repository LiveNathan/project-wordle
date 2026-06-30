import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Guess from "../Guess";
import {checkGuess} from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const handleGuessSubmit = (newGuess) => {
        const guessOutcome = checkGuess(newGuess, answer);
        setGuesses([...guesses, { id: crypto.randomUUID(), value: newGuess, guessOutcome: guessOutcome }]);
    };
    return <>
        <Guess guesses={guesses}/>
        <GuessInput formSubmitValue={handleGuessSubmit}/>
    </>;
}

export default Game;
