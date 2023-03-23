import { TodoList, TodoAdd } from "./components";
import { useTodos } from "../hooks/useTodos";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp ({todosCount}),
        <small> pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={(id) => handleToggleTodo(id)}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={(newTodo) => handleAddTodo(newTodo)} />
        </div>
      </div>
    </>
  );
};
