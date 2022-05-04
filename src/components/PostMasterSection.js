export default function PostMasterSection(props) {
  return (
    <div>
      <strong>{props.name}</strong>
      <button onClick={() => props.equipWeapon("Gally", "hunter")}>
        Equip
      </button>
      <div class="column">
        <div class="engrams">
          {props.hunter.engrams.map((engram) => {
            return (
              <div>
                <span>{engram.type}</span>
                <span>{engram.power}</span>
              </div>
            );
          })}
        </div>
        <div class="items">{JSON.stringify(props.hunter.items)}</div>
      </div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
    </div>
  );
}
