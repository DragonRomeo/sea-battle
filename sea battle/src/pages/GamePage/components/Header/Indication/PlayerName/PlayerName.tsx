import { useState } from 'react';

export const PlayerName = () => {
  const [name] = useState(localStorage.nickname);

  return <p>{name}</p>;
};
