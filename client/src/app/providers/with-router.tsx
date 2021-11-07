import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: React.FC) => {
  const Component = component;

  return (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
};
