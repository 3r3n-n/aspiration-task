import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";

const ghClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  }
});

export const fetchTopic = async (topicName) => {
    try {
        const result = await ghClient
        .query({
            query: gql`
                query GetSth01 {
                    topic(name: "${topicName}"){
                        relatedTopics(first: 11) {
                            name
                            stargazerCount
                        }
                    }
                }
            `
        });
        return result;
    }
    catch(error) {
        return error;
      }
};
