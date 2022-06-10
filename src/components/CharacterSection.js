import CharacterEmblem from "../components/CharacterEmblem";
import CharacterStatSection from "../components/CharacterStatSection";

export default function CharacterSection(props) {
  return (
    <div>
      <CharacterEmblem
        name={props.character.name}
        race={props.character.race}
        gearPower={props.character.gearPower}
        seasonBonus={props.character.seasonBonus}
      />
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
