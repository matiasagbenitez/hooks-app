import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: "add",
            payload: newTodo,
        });
    };

    const handleDeleteTodo = (todoId) => {
        dispatch({
            type: "delete",
            payload: todoId,
        });
    };

    const handleToggleTodo = (todoId) => {
        dispatch({
            type: "toggle",
            payload: todoId,
        });
    };

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
    };

}
