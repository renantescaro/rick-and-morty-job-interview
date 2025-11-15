import { render, screen } from "@testing-library/react";
import { CharacterCard } from "@/presentation/components/CharacterCard";
import { Character } from "@/domain/entities/Character";

const mockCharacter: Character = {
  id: "1",
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  image: "https://example.com/rick.png",
  origin: { name: "Earth" },
  location: { name: "Citadel of Ricks" }
};

describe("CharacterCard", () => {
  it("deve renderizar nome, imagem e status", () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes("Alive"))).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockCharacter.image);
  });
});
