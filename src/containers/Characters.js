import CharacterSection from "../components/CharacterSection";

export default function Characters() {
  return (
    <div>
      <h2>Characters</h2>
      <CharacterSection
        name="Hunter"
        maximumPower={1560}
        mobility={39}
        resilience={64}
        recovery={73}
        discipline={34}
        intellect={43}
        strength={105}
      />
      <CharacterSection
        name="Warlock"
        maximumPower={1449}
        mobility={40}
        resilience={46}
        recovery={42}
        discipline={62}
        intellect={47}
        strength={32}
      />
      <CharacterSection
        name="Titan"
        maximumPower={1449}
        mobility={39}
        resilience={36}
        recovery={32}
        discipline={34}
        intellect={38}
        strength={38}
      />
    </div>
  );
}
