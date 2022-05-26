import CharacterSection from "../components/CharacterSection";

export default function Characters() {
  const characters = [
    {
      name: "Hunter",
      race: "Human",
      maximumPower: 1560,
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
      maximumPower: 1449,
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
      maximumPower: 1449,
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
            <div class="CharacterEmblem">
              <div class="NameLight">
                <div> {character.name} </div>
                <div style={{ color: "#f5dc56" }}>{character.maximumPower}</div>
              </div>
              <div class="Race"> {character.race} </div>
            </div>
            <CharacterSection
              name={character.name}
              maximumPower={character.maximumPower}
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
