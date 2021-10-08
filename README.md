# Related Topics in Github API

This is a possible solution to the Aspiration FE take home task. 

It is an app that consumes data from the Github GraphQL API through an Apollo client.


## Installation

Open your terminal and clone this repo:

```bash
  git clone https://github.com/3r3n-n/aspiration-task.git
```

Move to the cloned repo:

```bash
  cd aspiration-task
```

Install the necessary dependencies:

```bash
  npm install
```

## Running this project

Before trying to run this project, you need to create a .env.local file in the root folder.

Add the following lines to the ```env.local``` file:

```
  REACT_APP_API_KEY = <your_github_access_token>
  NODE_ENV = development
```

Where you see ```<your_github_access_token>``` you need to replace it with your personal github access token. If you don't have one yet, you can learn how to create one [here](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Now you can run the project:

```bash
  npm start
```


## Running Tests

To run tests, run the following command

```bash
  npm test
```

## Dev Notes

### Relevant packages

This app was built with the ```create-react-app``` package.

The ```styled-components``` package was installed to apply some styling to the UI.

The ```@apollo/client graphql``` package was installed to have a client to consume data from the Github GraphQL API.

The ```@testing-library/react``` and ```@testing-library/jest-dom``` packages were installed to implement unit tests.

The ```msw``` package was installed to mock the API request and response in the unit tests.

### Other tools

The IDE that was used to build this project is Visual Studio Code.

The Github GraphQL Explorer was used in order to determine the syntax for the necessary API query.

## Future improvements

A unit test that mocks an error response in the API is necessary.

It would be nice to add some design / polish the style in the UI.