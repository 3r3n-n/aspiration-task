import React from 'react';
import { ApolloProvider } from '@apollo/client';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { client } from '../../ApolloClient';
import { server } from '../../mocks/server';
import RelatedTopics from './RelatedTopics';

beforeAll(() => server.listen());
beforeEach(() => {
    return client.clearStore();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('displays all fetched related topics', async () => {
  render(<ApolloProvider client={client}><RelatedTopics /></ApolloProvider>);
  const target = await screen.findAllByTestId('topic-name');
  expect(target.length).toBe(2);
});
