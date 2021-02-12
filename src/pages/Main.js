import React from 'react';
import { useContextData } from '../context/context';

export const Main = () => {
  const [state, dispatch] = useContextData();

  return (
    <div className="container main">
      <h1>Hello, {state.name}!</h1>
    </div>
  );
};
