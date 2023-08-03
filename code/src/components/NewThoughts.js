import React from 'react';

const NewThoughts = ({ newMessage, onNewThoughtsChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>Welcome to Happy Thoughts app! Type new task below.</h1>
      <textarea value={newMessage} onChange={onNewThoughtsChange} />
      <button type="submit">Submit form!</button>
    </form>
  )
}

export default NewThoughts;