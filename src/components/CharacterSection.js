export default function CharacterSection(props) {
  return (
    <div>
      <strong>{props.name}</strong>
      <ul>
        <li>Maximum Power: {props.maximumPower}</li>
        <li>Mobility: {props.mobility}</li>
        <li>Resilience: {props.resilience}</li>
        <li>Recovery: {props.recovery}</li>
        <li>Discipline: {props.discipline}</li>
        <li>Intellect: {props.intellect}</li>
        <li>Strength: {props.strength}</li>
      </ul>
    </div>
  );
}
