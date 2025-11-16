import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "@/presentation/components/Pagination";

describe("Pagination", () => {
  const defaultProps = {
    page: 1,
    total: 20,
    pageSize: 10,
    onNextPage: jest.fn(),
    onPrevPage: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve mostrar o texto de paginação", () => {
    render(<Pagination {...defaultProps} />);

    expect(screen.getByText("Página 1 de 2")).toBeInTheDocument();
  });

  it("não deve mostrar o botão anterior quando page = 1", () => {
    render(<Pagination {...defaultProps} />);

    const prevButton = screen.queryByAltText("Anterior");
    expect(prevButton).toBeNull();
  });

  it("deve mostrar o botão anterior quando page > 1", () => {
    render(<Pagination {...defaultProps} page={2} />);

    const prevButton = screen.getByAltText("Anterior");
    expect(prevButton).toBeInTheDocument();
  });

  it("não deve mostrar o botão próxima quando page = totalPages", () => {
    render(<Pagination {...defaultProps} page={2} />);

    const nextButton = screen.queryByAltText("Próxima");
    expect(nextButton).toBeNull();
  });

  it("deve mostrar o botão próxima quando page < totalPages", () => {
    render(<Pagination {...defaultProps} />);

    const nextButton = screen.getByAltText("Próxima");
    expect(nextButton).toBeInTheDocument();
  });

  it("deve chamar onNextPage quando clicar no botão próxima", () => {
    render(<Pagination {...defaultProps} />);

    const nextButton = screen.getByAltText("Próxima");

    fireEvent.click(nextButton);

    expect(defaultProps.onNextPage).toHaveBeenCalledTimes(1);
  });

  it("deve chamar onPrevPage quando clicar no botão anterior", () => {
    render(<Pagination {...defaultProps} page={2} />);

    const prevButton = screen.getByAltText("Anterior");

    fireEvent.click(prevButton);

    expect(defaultProps.onPrevPage).toHaveBeenCalledTimes(1);
  });

  it("deve calcular totalPages corretamente mesmo com pageSize = 0", () => {
    render(<Pagination {...defaultProps} pageSize={0} />);

    expect(screen.getByText("Página 1 de 20")).toBeInTheDocument();
  });

  it("deve exibir 'Página X de 1' quando total = 0", () => {
    render(<Pagination {...defaultProps} total={0} />);

    expect(screen.getByText("Página 1 de 1")).toBeInTheDocument();
  });
});
