export default function PostMasterSection(props) {
  return (
    <div>
      <strong>{props.name}</strong>
      {/* <button onClick={() => props.equipWeapon("Gally", "hunter")}>
        Equip
      </button> */}
      <div className="column">
        <div className="engrams">
          {props.hunter.engrams.map((engram, index) => {
            return (
              <div key={index}>
                <span>{engram.type}</span>
                <span>{engram.power}</span>
              </div>
            );
          })}
        </div>
        <br />
        <div className="items">
          {props.hunter.items.map((item, index) => {
            return (
              <div key={index}>
                <span>{item.type}</span>
                <span>{item.light}</span>
                <span>{item.name}</span>
              </div>
            );
          })}
          <br />
        </div>
      </div>
      <div className="column"></div>
      <div className="column"></div>
      <div className="column"></div>
    </div>
  );
}
