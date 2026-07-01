import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function Guess({guesses}) {
    const guessFixedArray = [];
    for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
        guessFixedArray.push(guesses[i] ?? {value: '', guessOutcome: []});
    }
    return <div className="guess-results">
        {guessFixedArray.map((guess, i) => <p key={i} className="guess">
            {[0, 1, 2, 3, 4].map(j => <span key={j} className={'cell ' + (guess.guessOutcome[j]?.status ?? '')}>{guess.guessOutcome[j]?.letter}</span>)}
        </p>)}
    </div>;
}

export default Guess;
