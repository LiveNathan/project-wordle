import React from 'react';

function GuessInput({ formSubmitValue}) {
    const [guessValue, setGuessValue] = React.useState('');
    return <form className="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault();
        const guess = guessValue.trim().toUpperCase();
        console.log(guess);
        setGuessValue('');
        formSubmitValue(guess);
    }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
            id="guess-input"
            value={guessValue}
            type="text"
            autoComplete="off"
            autoFocus
            maxLength="5"
            minLength="5"
            required
            pattern="[A-Za-z]{5}"
            title="Please enter a five-letter word."
            className="guess-input"
            onChange={event => {
                setGuessValue(event.target.value);
            }}
        />
    </form>;
}

export default GuessInput;
