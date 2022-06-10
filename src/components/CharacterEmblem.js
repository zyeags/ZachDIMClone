import Characters from "../containers/Characters.js";

export default function CharacterEmblem(character) {
  return (
    <div class="CharacterEmblem">
      <div class="NameLight">
        <div> {character.name} </div>
        <div style={{ color: "#f5dc56" }}>
          {character.gearPower + character.seasonBonus}
        </div>
      </div>
      <div class="Race"> {character.race} </div>
    </div>
  );
}
