import { render, screen, fireEvent } from "@testing-library/react";
import { CharacterList } from "@/presentation/components/CharacterList";

// Mock dos componentes internos
jest.mock("@/presentation/components/CharacterCard", () => ({
  CharacterCard: ({ character }: any) => (
    <div data-testid="character-card">{character.name}</div>
  ),
}));

jest.mock("@/presentation/components/Pagination", () => ({
  Pagination: ({ onNextPage, onPrevPage, page, total, pageSize }: any) => (
    <div>
      <p data-testid="pagination-info">
        page:{page} total:{total} pageSize:{pageSize}
      </p>
      <button data-testid="next-btn" onClick={onNextPage}>
        next
      </button>
      <button data-testid="prev-btn" onClick={onPrevPage}>
        prev
      </button>
    </div>
  ),
}));

const mockCharacters = [
  {
    id: "1",
    name: "Rick",
    image: "",
  },
  {
    id: "2",
    name: "Morty",
    image: "",
  },
];

describe("CharacterList", () => {
  it("deve renderizar todos os CharacterCard", () => {
    render(
      <CharacterList
        characters={mockCharacters}
        page={1}
        total={10}
        onNextPage={() => {}}
        onPrevPage={() => {}}
      />
    );

    const cards = screen.getAllByTestId("character-card");
    expect(cards).toHaveLength(2);

    expect(screen.getByText("Rick")).toBeInTheDocument();
    expect(screen.getByText("Morty")).toBeInTheDocument();
  });

  it("deve chamar onNextPage ao clicar no botão next", () => {
    const nextMock = jest.fn();

    render(
      <CharacterList
        characters={mockCharacters}
        page={1}
        total={10}
        onNextPage={nextMock}
        onPrevPage={() => {}}
      />
    );

    fireEvent.click(screen.getByTestId("next-btn"));
    expect(nextMock).toHaveBeenCalledTimes(1);
  });

  it("deve chamar onPrevPage ao clicar no botão prev", () => {
    const prevMock = jest.fn();

    render(
      <CharacterList
        characters={mockCharacters}
        page={1}
        total={10}
        onNextPage={() => {}}
        onPrevPage={prevMock}
      />
    );

    fireEvent.click(screen.getByTestId("prev-btn"));
    expect(prevMock).toHaveBeenCalledTimes(1);
  });

  it("deve passar as props corretas para Pagination", () => {
    render(
      <CharacterList
        characters={mockCharacters}
        page={2}
        total={50}
        onNextPage={() => {}}
        onPrevPage={() => {}}
      />
    );

    expect(
      screen.getByTestId("pagination-info")
    ).toHaveTextContent("page:2 total:50 pageSize:2");
  });
});
