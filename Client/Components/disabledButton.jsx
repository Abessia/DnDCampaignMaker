/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function DisabledButton(props) {
  return (
    <div id="basic-button">
      <button
        type="button"
        id={props.id}
        className={props.className}
        disabled
      >
        {props.text}
      </button>
    </div>
  );
}

export default DisabledButton;
