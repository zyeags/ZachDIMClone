export default function CharacterSection(props) {
  return (
    <div>
      <strong>{props.name}</strong>
      <ul>
        <li>Maximum Power:</li>
        <li>Mobility:</li>
        <li>Resilience:</li>
        <li>Recovery:</li>
        <li>Discipline:</li>
        <li>Intellect:</li>
        <li>Strength:</li>
      </ul>
    </div>
  );
}
