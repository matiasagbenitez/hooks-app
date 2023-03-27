import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe("Pruebas en el MainApp", () => {
  test("Debe de mostrar el HomePage", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage:")).toBeTruthy();
  });

  test("Debe de mostrar el LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
  });

  test("Debe de mostrar el AboutPage", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );
  });

    test("Debe de redireccionar a About si la ruta no existe", () => {
        render(
            <MemoryRouter initialEntries={["/about"]}>
                <MainApp />
            </MemoryRouter>
        );
    });
});
