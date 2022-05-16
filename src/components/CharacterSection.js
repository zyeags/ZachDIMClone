export default function CharacterSection(props) {
  return (
    <div>
      <ul>
        {
          <img
            value="maxPower"
            width="20px"
            height="20x"
            src="https://www.bungie.net/common/destiny2_content/icons/7c30e0e489e51a3920b4446684fbcdb1.png"
            alt="maxPower"
          />
        }
        : {props.maximumPower}
        {
          <img
            value="mobility"
            width="20px"
            height="20x"
            src="https://www.bungie.net/common/destiny2_content/icons/e26e0e93a9daf4fdd21bf64eb9246340.png"
            alt="mobility"
          />
        }
        : {props.mobility}
        {
          <img
            value="resilience"
            width="20px"
            height="20x"
            src="https://www.bungie.net/common/destiny2_content/icons/202ecc1c6febeb6b97dafc856e863140.png"
            alt="resilience"
          />
        }
        : {props.resilience}
        {
          <img
            value="recovery"
            width="20px"
            height="20x"
            src="https://www.bungie.net/common/destiny2_content/icons/128eee4ee7fc127851ab32eac6ca91cf.png"
            alt="recovery"
          />
        }
        : {props.recovery}
        {
          <img
            value="discipline"
            width="20px"
            height="20x"
            src="https://www.bungie.net/common/destiny2_content/icons/ca62128071dc254fe75891211b98b237.png"
            alt="discipline"
          />
        }
        : {props.discipline}
        {
          <img
            value="intellect"
            width="20px"
            height="20x"
            src="https://www.bungie.net/common/destiny2_content/icons/59732534ce7060dba681d1ba84c055a6.png"
            alt="intellect"
          />
        }
        : {props.intellect}
        {
          <img
            value="strength"
            width="20px"
            height="20x"
            src="https://www.bungie.net/common/destiny2_content/icons/c7eefc8abbaa586eeab79e962a79d6ad.png"
            alt="strength"
          />
        }
        : {props.strength}
      </ul>
    </div>
  );
}
