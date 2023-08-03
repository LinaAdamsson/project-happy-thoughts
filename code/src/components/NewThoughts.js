import React from 'react';

const NewThoughts = ({ newMessage, handleNewThoughtsChange, onFormSubmit }) => {
  // Above: newMessage = a state passed in as a prop (to component)
  const handleInputChange = (event) => {
    // const input = event.target.value;
    handleNewThoughtsChange(event);
  };
  // Above: handleNewThoughtsChange = Function called when writing message in text field

  // Below: onFormSubmit when user submits the form.
  return (
    <form className="message-container" onSubmit={onFormSubmit}>
      <p className="thought-text">What&apos;s making you happy right now?</p>
      <textarea
        placeholder="What's on your mind?"
        value={newMessage}
        onChange={handleInputChange} />
      <div className="main">
        <button className="submit-btn" type="submit">
          ❤️Send a Happy Thought❤️
        </button>
      </div>
    </form>
  );
};

export default NewThoughts