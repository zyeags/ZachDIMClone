export default function ItemSection(props) {
  return (
    <div>
      <strong>{props.name}</strong>
      <button onClick={() => props.equipWeapon("Gally", "hunter")}>
        Equip
      </button>
      <ul>
        <li>{props.weapons}</li>
        <li>{props.armor}</li>
        <li>{props.general}</li>
        <li>{props.currency}</li>
      </ul>
    </div>
  );
}
