import { makeVar } from "@apollo/client";

const todoList = makeVar([
  {
    id: 1,
    name: "Jian",
    task: "Tarefa de teste"
  }
]);

export default todoList;
