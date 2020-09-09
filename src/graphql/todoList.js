import { makeVar } from "@apollo/client";

//initial state
const todoList = makeVar([
  {
    id: 1,
    name: "Fazer café ☕",
    checked: false,
    task: "eae"
  }
]);

export default todoList;
