import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Pruebas en TodoApp", () => {

  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: "Aprender React", done: false },
      { id: 2, description: "Aprender Mongo", done: true }
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleAddTodo: jest.fn(),
  });

  test("Debe de mostrarse correctamente", () => {
    render(<TodoApp />);
    expect(screen.getByText('Aprender React')).toBeTruthy();
    expect(screen.getByText('Aprender Mongo')).toBeTruthy();

    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
