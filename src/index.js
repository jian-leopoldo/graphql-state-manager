import React from "react";
import ReactDOM from "react-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  makeVar,
  gql
} from "@apollo/client";

import App from "./App";
import userSettings from "./userSettings";
import todoList from "./graphql/todoList";

const typeDefs = gql`
  type AppBarColorSetting {
    id: Int!
    name: String!
    setting: String!
  }

  type TodoList {
    id: Int!
    name: String!
    task: String!
  }

  extend type Query {
    todoList: TodoList
  }

  type Query {
    appBarColorSetting: AppBarColorSetting!
  }

  type Mutation {
    updateAppBarColorSetting(setting: String!): AppBarColorSetting!
  }
`;

const resolvers = {
  Query: {
    appBarColorSetting: () => userSettings.appBarColorSetting
  },
  Mutation: {
    updateAppBarColorSetting: (_, { setting }) => {
      userSettings.appBarColorSetting.setting = setting;
      return userSettings.appBarColorSetting;
    }
  }
};

const client = new ApolloClient({
  cache: new InMemoryCache({
    freezeResults: true,
    typePolicies: {
      Query: {
        fields: {
          toDoList: {
            read() {
              return todoList();
            }
          }
        }
      }
    }
  }),
  typeDefs,
  resolvers,
  assumeImmutableResults: true
});

const TogglesApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<TogglesApp />, document.getElementById("root"));
