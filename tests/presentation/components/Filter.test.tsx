import { render, screen, fireEvent } from "@testing-library/react";
import { Filter } from "@/presentation/components/Filter";

describe("Filter", () => {
  it("deve renderizar input e botão", () => {
    render(<Filter onFilter={() => {}} />);

    expect(screen.getByPlaceholderText("Filtrar por nome...")).toBeInTheDocument();
    expect(screen.getByText("Buscar")).toBeInTheDocument();
  });

  it("deve atualizar o input ao digitar", () => {
    render(<Filter onFilter={() => {}} />);

    const input = screen.getByPlaceholderText("Filtrar por nome...");

    fireEvent.change(input, { target: { value: "Rick" } });

    expect((input as HTMLInputElement).value).toBe("Rick");
  });

  it("deve chamar onFilter com o nome correto ao clicar em Buscar", () => {
    const mockFn = jest.fn();

    render(<Filter onFilter={mockFn} />);

    const input = screen.getByPlaceholderText("Filtrar por nome...");
    const button = screen.getByText("Buscar");

    fireEvent.change(input, { target: { value: "  Morty " } });
    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("Morty");
  });

  it("não deve chamar onFilter se o input estiver vazio", () => {
    const mockFn = jest.fn();

    render(<Filter onFilter={mockFn} />);

    const button = screen.getByText("Buscar");

    fireEvent.click(button);

    expect(mockFn).not.toHaveBeenCalled();
  });

  it("não deve chamar onFilter se o input tiver apenas espaços", () => {
    const mockFn = jest.fn();

    render(<Filter onFilter={mockFn} />);

    const input = screen.getByPlaceholderText("Filtrar por nome...");
    fireEvent.change(input, { target: { value: "   " } });

    const button = screen.getByText("Buscar");
    fireEvent.click(button);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
