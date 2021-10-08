import { graphql } from 'msw';

export const handlers = [
    graphql.query('GetTopicData', (req, res, ctx) => {
        return res(
            ctx.data({
                "topic": {
                    "relatedTopics": [
                        {
                            "name": "angular",
                            "stargazerCount": 35646
                        },
                        {
                            "name": "react-native",
                            "stargazerCount": 20164
                        },
                    ]
                }
            }),
        );
      }),
  ];