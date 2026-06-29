import React from 'react';

function Guess({guesses}) {
    const guessFixedArray = [];
    for (let i = 0; i < 5; i++) {
        if (guesses[i]) {
            guessFixedArray.push(guesses[i]);
        } else {
            guessFixedArray.push({ id: crypto.randomUUID(), value: ''});
        }
    }
    return <div className="guess-results">
        {guessFixedArray.map(guess => <p key={guess.id} className="guess">
            <span className="cell">{guess.value[0]}</span>
            <span className="cell">{guess.value[1]}</span>
            <span className="cell">{guess.value[2]}</span>
            <span className="cell">{guess.value[3]}</span>
            <span className="cell">{guess.value[4]}</span></p>)}
    </div>;
}

export default Guess;
