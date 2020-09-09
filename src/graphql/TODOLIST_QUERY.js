import gql from "graphql-tag";

const TODOLIST_QUERY = gql`
  query appBarColorSetting {
    toDoList @client {
      id
      name
      task
      checked
    }
  }
`;

export default TODOLIST_QUERY;
