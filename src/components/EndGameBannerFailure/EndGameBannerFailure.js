import React from 'react';

function EndGameBannerFailure({ answer}) {
  return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>;
}

export default EndGameBannerFailure;
