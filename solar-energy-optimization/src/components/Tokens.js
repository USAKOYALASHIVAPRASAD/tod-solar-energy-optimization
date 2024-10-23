import React from 'react';

const Tokens = ({ tokens }) => {
  return (
    <div className="tokens">
      <h2>Tokens</h2>
      <ul>
        {tokens.map((tokenObj, index) => (
          <li key={index}>Token: {tokenObj.token}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tokens;
