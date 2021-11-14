import React from 'react';
import StyledButton from './StyledButton';
import './FlagAnswer.css';

const FlagAnswer = ({correct, answer, onNext}) => {
    return (
      <div className='flag-answer'>
        {correct ?
          `Correct!: ${answer.common}` :
          `Incorrect! Correct Answer: ${answer.common}`}
        <StyledButton text="NEXT" onClick={onNext} />
      </div>
    )
  };

export default FlagAnswer;