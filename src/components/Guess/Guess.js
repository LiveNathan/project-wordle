import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function Guess({guesses}) {
    const guessFixedArray = [];
    for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
        if (guesses[i]) {
            guessFixedArray.push(guesses[i]);
        } else {
            guessFixedArray.push({id: crypto.randomUUID(), value: '', guessOutcome: []});
        }
    }
    return <div className="guess-results">
        {guessFixedArray.map(guess => <p key={guess.id} className="guess">
            {[0, 1, 2, 3, 4].map(i => <span key={i} className={'cell ' + (guess.guessOutcome[i]?.status ?? '')}>{guess.guessOutcome[i]?.letter}</span>)}
        </p>)}
    </div>;
}

export default Guess;
