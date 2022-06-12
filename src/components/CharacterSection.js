import CharacterEmblem from "../components/CharacterEmblem";
import CharacterStatSection from "../components/CharacterStatSection";

export default function CharacterSection(props) {
  return (
    <div className="CharacterSection">
      <CharacterEmblem
        name={props.character.name}
        race={props.character.race}
        gearPower={props.character.gearPower}
        seasonBonus={props.character.seasonBonus}
      />
      {/* <a href='https://www.bungie.net/en/OAuth/Authorize?client_id=21908&response_type=code'> Login with Bungie</a> */}

      <CharacterStatSection
        name={props.character.name}
        maximumPower={props.character.gearPower + props.character.seasonBonus}
        gearPower={props.character.gearPower}
        seasonBonus={props.character.seasonBonus}
        mobility={props.character.mobility}
        resilience={props.character.resilience}
        recovery={props.character.recovery}
        discipline={props.character.discipline}
        intellect={props.character.intellect}
        strength={props.character.strength}
      />
    </div>
  );
}
