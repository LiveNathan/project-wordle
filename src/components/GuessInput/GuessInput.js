import React from 'react';

function GuessInput({ formSubmitValue, gameState}) {
    const [guessValue, setGuessValue] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    return <form className="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault();
        const guess = guessValue.trim().toUpperCase();
        const error = formSubmitValue(guess);
        if (error) {
            setErrorMessage(error);
            return;
        }
        setErrorMessage('');
        setGuessValue('');
    }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
            id="guess-input"
            value={guessValue}
            type="text"
            autoComplete="off"
            autoFocus
            disabled={gameState !== 'in-progress'}
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
        {errorMessage && <p className="guess-input-error">{errorMessage}</p>}
    </form>;
}

export default GuessInput;
