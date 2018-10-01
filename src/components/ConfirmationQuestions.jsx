import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>something relevant</p>
      <button onClick={props.onConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onConfirmation: PropTypes.func
};

export default ConfirmationQuestions;