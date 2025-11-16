import { render, screen } from "@testing-library/react";
import { CharacterInfo } from "@/presentation/components/CharacterInfo";

const mockCharacter = {
  id: "1",
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  image: "https://example.com/rick.png",
  origin: { name: "Earth (C-137)" },
  location: { name: "Citadel of Ricks" },
};

describe("CharacterInfo", () => {
  it("deve renderizar todas as informações do personagem", () => {
    render(<CharacterInfo character={mockCharacter} />);

    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockCharacter.image);

    expect(screen.getByText(`Status: ${mockCharacter.status}`)).toBeInTheDocument();
    expect(screen.getByText(`Espécie: ${mockCharacter.species}`)).toBeInTheDocument();
    expect(screen.getByText(`Gênero: ${mockCharacter.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Origem: ${mockCharacter.origin.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Local atual: ${mockCharacter.location.name}`)).toBeInTheDocument();
  });
});
