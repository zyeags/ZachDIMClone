import CharacterSection from "../components/CharacterSection";

export default function Characters() {
  const characters = [
    {
      name: "Hunter",
      race: "Human",
      seasonRank: 78,
      gearPower: 1560,
      seasonBonus: 5,
      mobility: 39,
      resilience: 64,
      recovery: 73,
      discipline: 34,
      intellect: 43,
      strength: 105
    },
    {
      name: "Warlock",
      race: "Awoken",
      seasonRank: 78,
      gearPower: 1449,
      seasonBonus: 0,
      mobility: 40,
      resilience: 46,
      recovery: 42,
      discipline: 62,
      intellect: 47,
      strength: 32
    },
    {
      name: "Titan",
      race: "Exo",
      seasonRank: 78,
      gearPower: 1449,
      seasonBonus: 0,
      mobility: 39,
      resilience: 36,
      recovery: 32,
      discipline: 34,
      intellect: 38,
      strength: 38
    }
  ];

  return (
    <div>
      <h2>Characters</h2>

      {characters.map((character, index) => (
        <CharacterSection key={index} character={character} />
      ))}
    </div>
  );
}
