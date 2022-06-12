export default function CharacterEmblem(props) {
  return (
    <div className="CharacterEmblem">
      <div className="NameLight">
        <div> {props.name} </div>
        <div style={{ color: "#f5dc56" }}>
          {props.gearPower + props.seasonBonus}
        </div>
      </div>
      <div className="Race"> {props.race} </div>
    </div>
  );
}
