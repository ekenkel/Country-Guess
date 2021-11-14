import React from 'react';

const StyledButton = ({text, onClick, type}) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    className="btn btn-primary"
  >
    {text}
  </button>
);

export default StyledButton;