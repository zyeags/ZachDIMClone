export default function CharacterEmblem(props) {
  return (
    <div class="CharacterEmblem">
      <div class="NameLight">
        <div> {props.name} </div>
        <div style={{ color: "#f5dc56" }}>{props.maximumPower}</div>
      </div>
      <div class="Race"> {props.race} </div>
    </div>
  );
}
