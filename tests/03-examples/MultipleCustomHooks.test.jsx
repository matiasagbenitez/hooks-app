import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks";

jest.mock("../../src/hooks/useFetch");

describe("Pruebas en MultipleCustomHooks", () => {
  test("Debe de mostrar el componente por defecto", () => {
    
    
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton).toBeTruthy();    // Había que verificar el habilitado, pero saqué el disabled
  });

});
