import gql from "graphql-tag";

const UPDATE_TODOLIST_MUTATION = gql`
  mutation updateTodoList($setting: String!) {
    updateTodoList(setting: $setting) @client
  }
`;

export default UPDATE_TODOLIST_MUTATION;
