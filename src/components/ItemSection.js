export default function ItemSection(props) {
  return (
    <div>
      <strong>{props.name}</strong>
      <ul>
        <li>{props.weapons}</li>
        <li>{props.armor}</li>
        <li>{props.currency}</li>
      </ul>
    </div>
  );
}
