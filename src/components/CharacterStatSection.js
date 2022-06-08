export default function CharacterStatSection(props) {
  return (
    <div>
      <div class="PowerLevel">
        <div class="MaxPowerContainer">
          {
            <img
              value="maxPower"
              width="20px"
              height="20px"
              src="https://www.bungie.net/common/destiny2_content/icons/7c30e0e489e51a3920b4446684fbcdb1.png"
              alt="maxPower"
            />
          }
          {props.maximumPower} =
        </div>
        <div class="GearPowerContainer">
          {
            <img
              value="gearPower"
              width="20px"
              height="20px"
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 51 51'%3e%3cpath d='M24.77 7.03c-8.15.38-14.42 7.41-14.42 15.57v16.06c0 .23.13.44.34.53l10.33 4.68c.78.35 1.66-.22 1.66-1.07V31.9c0-.39-.19-.75-.52-.97l-5.39-3.64c-.87-.52-1.43-1.5-1.34-2.61.13-1.46 1.46-2.52 2.93-2.52h4.36c.65 0 1.17.53 1.17 1.17v6.71s0 .61 1.61.61 1.61-.61 1.61-.61v-6.71c0-.65.52-1.17 1.17-1.17h4.36c1.47 0 2.8 1.06 2.93 2.52.1 1.11-.47 2.09-1.34 2.61l-5.39 3.64c-.32.22-.52.58-.52.97v10.91c0 .85.88 1.42 1.66 1.07l10.33-4.68c.21-.1.34-.3.34-.53v-16.5c.01-8.61-7.18-15.55-15.88-15.14z'/%3e%3c/svg%3e"
              alt="gearPower"
            />
          }
          {props.gearPower} +
        </div>
        <div class="SeasonBonusContainer">
          {
            <img
              value="bonus"
              width="20px"
              height="20px"
              src="data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M50 7.5 7.5 50l38.75 37.75V57.5H37.5L50 31.25 62.5 57.5h-8.75v30.25L92.5 50z'/%3e%3c/svg%3e"
              alt="bonus"
            />
          }
          {props.seasonBonus}
        </div>
      </div>
      <div class="StatContainer">
        <div class="Mobility">
          {
            <img
              value="mobility"
              width="20px"
              height="20px"
              src="https://www.bungie.net/common/destiny2_content/icons/e26e0e93a9daf4fdd21bf64eb9246340.png"
              alt="mobility"
            />
          }
          {props.mobility}
        </div>
        <div class="Resilience">
          {
            <img
              value="resilience"
              width="20px"
              height="20px"
              src="https://www.bungie.net/common/destiny2_content/icons/202ecc1c6febeb6b97dafc856e863140.png"
              alt="resilience"
            />
          }
          {props.resilience}
        </div>
        <div class="Recovery">
          {
            <img
              value="recovery"
              width="20px"
              height="20px"
              src="https://www.bungie.net/common/destiny2_content/icons/128eee4ee7fc127851ab32eac6ca91cf.png"
              alt="recovery"
            />
          }
          {props.recovery}
        </div>
        <div class="Discipline">
          {
            <img
              value="discipline"
              width="20px"
              height="20px"
              src="https://www.bungie.net/common/destiny2_content/icons/ca62128071dc254fe75891211b98b237.png"
              alt="discipline"
            />
          }
          {props.discipline}
        </div>
        <div class="Intellect">
          {
            <img
              value="intellect"
              width="20px"
              height="20px"
              src="https://www.bungie.net/common/destiny2_content/icons/59732534ce7060dba681d1ba84c055a6.png"
              alt="intellect"
            />
          }
          {props.intellect}
        </div>
        <div class="Strength">
          {
            <img
              value="strength"
              width="20px"
              height="20px"
              src="https://www.bungie.net/common/destiny2_content/icons/c7eefc8abbaa586eeab79e962a79d6ad.png"
              alt="strength"
            />
          }
          {props.strength}
        </div>
      </div>
    </div>
  );
}
