import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import todoAction from "../actions/todoAction";
import TODOLIST_QUERY from "../graphql/TODOLIST_QUERY";
import { TextField, Button } from "@material-ui/core";

function TodoList() {
  const { data, loading } = useQuery(TODOLIST_QUERY);
  const [todo, setTodo] = useState();
  const totalTodo = data.toDoList.length;
  const completed = data.toDoList.filter((item) => item.checked);

  function clickButton() {
    let previousTodo = [...data.toDoList];
    todoAction().addTodo(todo, previousTodo);
    setTodo("");
  }

  function updateTodo(checked, id) {
    let previousTodo = [...data.toDoList];
    todoAction().updateTodo(checked, id, previousTodo);
  }

  return (
    <div>
      <div>
        Total de tasks: {totalTodo}/{completed.length}
      </div>
      <TextField value={todo} onChange={(e) => setTodo(e.target.value)} />
      <p>{todo}</p>
      <Button variant="outlined" color="primary" onClick={() => clickButton()}>
        +
      </Button>
      {!loading ? (
        data.toDoList.map((item) => (
          <div>
            <span
              style={{ textDecoration: item.checked ? "line-through" : "none" }}
            >
              {item.name}
              <input
                type="checkbox"
                checked={item.checked}
                onChange={(e) => updateTodo(e.target.checked, item.id)}
              />
            </span>
          </div>
        ))
      ) : (
        <div>Carregando</div>
      )}
    </div>
  );
}

export default TodoList;
