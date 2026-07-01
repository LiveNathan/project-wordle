import React from 'react';

function EndGameBannerSuccess({guessCount}) {
    return <div className="happy banner">
        <p>
            <strong>Congratulations!</strong> Got it in <strong>{guessCount} guesses</strong>.
        </p>
    </div>;
}

export default EndGameBannerSuccess;
