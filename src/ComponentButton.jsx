import React, {useState} from 'react';
import PropTypes from 'prop-types';

function ComponentButton({disabled}) {
  const [showMessage, setShowMesasge] = useState(false)

  const handleClick = () => {
    setShowMesasge(!showMessage)
  }

  const message = getMessage(showMessage)

  return (
    <div>
      <button
        disabled={disabled}
        onClick={handleClick}
        type='button'
      >
        <span>{'Click me to show secret'}</span>
      </button>

      <div>
        {message}
      </div>
    </div>
  );
}

ComponentButton.propTypes = {
  disabled: PropTypes.bool
};

ComponentButton.defaultProps = {
  disabled: false
};


function getMessage(showMessage) {
  if (showMessage) return (<span>My secret message</span>)
  return null
}

export default ComponentButton;