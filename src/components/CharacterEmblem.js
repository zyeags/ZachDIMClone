export default function CharacterEmblem(character) {
  return (
    <div className="CharacterEmblem">
      <div className="NameLight">
        <div> {character.name} </div>
        <div style={{ color: "#f5dc56" }}>
          {character.gearPower + character.seasonBonus}
        </div>
      </div>
      <div className="Race"> {character.race} </div>
    </div>
  );
}
