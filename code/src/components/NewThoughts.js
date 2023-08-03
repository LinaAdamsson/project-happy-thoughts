import React, { useState } from 'react';

const NewThoughts = ({ newMessage, handleNewThoughtsChange, onFormSubmit }) => {
  const [remainingChars, setRemainingChars] = useState(160 - newMessage.length);
  // Above: newMessage = a state passed in as a prop (to component)
  const handleInputChange = (event) => {
    const input = event.target.value;
    const remaining = 160 - input.length;
    setRemainingChars(remaining);
    handleNewThoughtsChange(event);
  };
  // Above: handleNewThoughtsChange = Function called when writing message in text field

  // Below: onFormSubmit when user submits the form.
  return (
    <form className="message-container" onSubmit={onFormSubmit}>
      <p className="thought-text">Share a happy thought!</p>
      <textarea
        placeholder="What's on your mind?"
        value={newMessage}
        onChange={handleInputChange} />
      <div className="main">
        <div className="char-count">{remainingChars} characters remaining</div>
        <button className="submit-btn" type="submit" disabled={newMessage.length < 1 || newMessage.length > 160}>
          ❤️Send a Happy Thought❤️
        </button>
      </div>
    </form>
  );
};

export default NewThoughts