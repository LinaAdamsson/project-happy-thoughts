import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import NewThoughts from 'components/NewThoughts';
import ThoughtsList from 'components/ThoughtsList';

export const App = () => {
  const [thoughts, setThoughts] = useState([]); // Here an array of objects is stored inside
  // a variable. The array represents thoughts/messages fetched from the API.
  const [loading, setLoading] = useState(false); // Here a boolean value indicates that/whether
  // the API call is active.
  const [newMessage, setNewMessage] = useState(''); // This is a variable that stores the value
  // of/message put in the component called NewThoughts.

  // Below: A function. handleNewThoughtsChange = a function that updates the newMessage state
  // variable when the user types in text area.

  const handleNewThoughtsChange = (event) => {
    setNewMessage(event.target.value)
  }

  // Below: A function. fetchThoughts = a function that makes a GET request to the API to fetch
  // thoughts and update the thoughts state variable.

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  // Below: The useEffect hook is used to fetch the data from the API when the component mounts,
  // and the fetched data is set to the thoughts state using the setThoughts function.

  useEffect(() => {
    fetchThoughts();
  }, []);

  // Below: A function. The onFormSubmit function is called when the user submits a new thought.
  // Sends a new message. It makes a POST request to the API with the new thought message and
  // updates the thoughts state variable. Gets the response from the API, and then adds it to
  // the thoughts array:

  const onFormSubmit = (event) => {
    event.preventDefault();

    // Below: Send the POST request with the input from your form

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newMessage
      })
    }
    // https://project-happy-thoughts-api-7irwn4hbpa-lz.a.run.app/thoughts
    // https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts

    fetch('https://project-happy-thoughts-api-7irwn4hbpa-lz.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewMessage(''));
  }

  const onLikesIncrease = (LikeID) => {
    const options = { method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      } }

    // https://project-happy-thoughts-api-7irwn4hbpa-lz.a.run.app/thoughts/${LikeID}/like
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${LikeID}/like`, options)
      .then((res) => res.json())
      .then(console.log('xxx'))
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts())
  }

  return (
    <div className="main-container">
      <Header />
      <div className="thoughts">
        <NewThoughts
          newMessage={newMessage}
          handleNewThoughtsChange={handleNewThoughtsChange}
          onFormSubmit={onFormSubmit} />
        <ThoughtsList
          loading={loading}
          thoughts={thoughts}
          onLikesIncrease={onLikesIncrease} />
      </div>
    </div>
  )
};

//     fetch('https://technigo-thoughts.herokuapp.com/', {
//     method: 'POST',
//     body: JSON.stringify({
//     message: 'Hello world' })
//   })
//     .then((res) => res.json())
//     .then((newThought) => {
//       // Now you have `newThought` which is the response from the
//       // API as documented at the top of this readme. You can use
//       // it to update the `thoughts` array:
//       setThoughts((previousThoughts) => [newThought, ...previousThoughts])
//     })
// }