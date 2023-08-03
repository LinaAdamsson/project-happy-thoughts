// import React, { useEffect, useState } from 'react';
import React from 'react';
import Header from 'components/Header';
// import NewThoughts from 'components/NewThoughts';
import ThoughtsList from 'components/ThoughtsList';

export const App = () => {
  return (
    <div>
      <Header />
      <ThoughtsList />
    </div>
  );
}