import { useState } from "react";
import ItemSection from "../components/ItemSection";

const defaultEquipped = {
  warlock: "test",
  titan: "",
  hunter: ""
};

export default function Inventory() {
  const [equipped, setEquipped] = useState(defaultEquipped);

  function equipWeapon(weapon, characterClass) {
    const copyEquipped = { ...equipped };
    copyEquipped[characterClass] = weapon;
    setEquipped(copyEquipped);
  }

  return (
    <div>
      <h2>Inventory2</h2>

      <div>
        warlock: {equipped.warlock}
        titan: {equipped.titan}
        hunter: {equipped.hunter}
      </div>

      <ItemSection
        name="Postmaster"
        weapons={["Divinity,", " Gjally,"]}
        armor={["Lost Pacific Helm"]}
        general={["Exotic Ghost Shell"]}
        currency={["Strange Coins,", " Treasure Keys,", " Enhancement Cores"]}
      />
      <ItemSection name="Weapons" equipWeapon={equipWeapon} />
      <ItemSection name="Armor" equipWeapon={equipWeapon} />
      <ItemSection name="General" />
      <ItemSection name="Inventory" />
    </div>
  );
}
