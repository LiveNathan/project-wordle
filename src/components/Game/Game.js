import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Guess from "../Guess";
import {checkGuess} from "../../game-helpers";
import EndGameBannerSuccess from "../EndGameBannerSuccess";
import EndGameBannerFailure from "../EndGameBannerFailure";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [guessIsAnswer, setGuessIsAnswer] = React.useState(false);
    const [guessCount, setGuessCount] = React.useState(0);
    const [gameState, setGameState] = React.useState('in-progress');
    const handleGuessSubmit = (newGuess) => {
        const guessAlreadyUsed = guesses.some(guess => guess.value === newGuess);
        if (guessAlreadyUsed) {
            return "You already guessed that word."
        }
        const guessOutcome = checkGuess(newGuess, answer);
        setGuesses([...guesses, {id: crypto.randomUUID(), value: newGuess, guessOutcome: guessOutcome}]);
        setGuessIsAnswer(newGuess === answer);
        setGuessCount(guesses.length);
        if (guessIsAnswer) {
            setGameState('won');
        } else if (guesses.length > NUM_OF_GUESSES_ALLOWED) {
            setGameState('lost');
        }
    };
    return <>
        <Guess guesses={guesses}/>
        <GuessInput formSubmitValue={handleGuessSubmit} gameState={gameState}/>
        {gameState === 'won' && <EndGameBannerSuccess guessCount={guessCount}/>}
        {gameState === 'lost' && <EndGameBannerFailure answer={answer}/>}
    </>;
}

export default Game;
