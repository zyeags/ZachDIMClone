export default function PostMasterSection(props) {
  return (
    <div>
      <strong>{props.name}</strong>
      {/* <button onClick={() => props.equipWeapon("Gally", "hunter")}>
        Equip
      </button> */}
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
        <br />
        <div class="items">
          {props.hunter.items.map((item) => {
            return (
              <div>
                <span>{item.type}</span>
                <span>{item.light}</span>
                <span>{item.name}</span>
              </div>
            );
          })}
          <br />
        </div>
      </div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
    </div>
  );
}
