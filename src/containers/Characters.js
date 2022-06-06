import CharacterSection from "../components/CharacterSection";
import CharacterEmblem from "../components/CharacterEmblem";

export default function Characters() {
  const characters = [
    {
      name: "Hunter",
      race: "Human",
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
    <body>
      <div>
        <h2>Characters</h2>

        {characters.map((character) => (
          <div class="CharacterSection">
            <CharacterEmblem />
            <CharacterSection
              name={character.name}
              maximumPower={character.gearPower + character.seasonBonus}
              gearPower={character.gearPower}
              seasonBonus={character.seasonBonus}
              mobility={character.mobility}
              resilience={character.resilience}
              recovery={character.recovery}
              discipline={character.discipline}
              intellect={character.intellect}
              strength={character.strength}
            />
          </div>
        ))}
      </div>
    </body>
  );
}
