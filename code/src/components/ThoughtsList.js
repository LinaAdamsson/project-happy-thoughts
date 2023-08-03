import React from 'react';
import { formatDistance } from 'date-fns';

const ThoughtsList = ({ loading, thoughts, onLikesIncrease }) => {
  if (loading) {
    return <div className="Loading">Loading</div>
  }

  return (
    <section>
      {thoughts.map((list) => (
        <div className="Thoughts" key={list.id}>
          <p className="thought-text">{list.message}</p>
          <div className="likes">
            <button type="button" className={(list.hearts === 0 ? 'like-btn' : 'no-like-btn')} onClick={() => onLikesIncrease(list.id)}>❤️</button>
            <p className="counter">x {list.hearts}</p>
            <p className="date">
              {formatDistance(new Date(list.createdAt), Date.now(), { addSuffix: true })}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ThoughtsList