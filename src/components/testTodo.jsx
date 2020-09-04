import React from "react";
import { useQuery } from "@apollo/client";
import todoList from "../graphql/todoList";
import TODOLIST_QUERY from "../graphql/TODOLIST_QUERY";

function TodoList() {
  const { data, loading } = useQuery(TODOLIST_QUERY);

  return (
    console.log(data),
    console.log(todoList()),
    (
      <div>
        <button
          onClick={() =>
            todoList([
              ...data.toDoList,
              {
                id: 2,
                name: "tester",
                task: "testinho"
              }
            ])
          }
        ></button>
        {!loading ? <span>{data.toDoList[0].task}</span> : ""}
        {!loading ? (
          data.toDoList.map((item) => <div>{item.name}</div>)
        ) : (
          <div>Carregando</div>
        )}
      </div>
    )
  );
}

export default TodoList;
