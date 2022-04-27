import CharacterSection from "../components/CharacterSection";

export default function Characters() {
  return (
    <div>
      <h2>Characters</h2>
      <CharacterSection name="Hunter" />
      <CharacterSection name="Warlock" />
      <CharacterSection name="Titan" />
      <CharacterSection name="Vault" />
    </div>
  );
}
