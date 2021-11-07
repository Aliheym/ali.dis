import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { API_URL, IS_DEV } from 'shared/config';

const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache(),
  connectToDevTools: IS_DEV,
});

export const withApollo = (component: React.FC) => () => {
  const Component = component;

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
};
