import todoList from "../graphql/todoList";

function updateTodo(checked, id, previousTodo) {
  const newTodo = previousTodo.map((todo) =>
    id === todo.id
      ? {
          ...todo,
          checked
        }
      : todo
  );
  todoList(newTodo);
}

function addTodo(value, previousTodo) {
  const todoLength = previousTodo[previousTodo.length - 1].id;
  return todoList([
    ...previousTodo,
    {
      id: todoLength + 1,
      name: value,
      task: "teste",
      checked: false
    }
  ]);
}

const todoAction = () => {
  return {
    updateTodo,
    addTodo
  };
};

export default todoAction;
