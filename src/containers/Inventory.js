import { useState } from "react";
import ItemSection from "../components/ItemSection";
import PostMasterSection from "../components/PostMasterSection";

const inventoryQuery = {
  postmaster: {
    hunter: {
      engrams: [
        {
          type: "prime",
          power: 1500
        },
        {
          type: "umbral",
          power: 1530
        }
      ],

      items: [
        {
          type: "ascendant"
        },
        {
          type: "weapon",
          name: "The Title",
          light: 1560
        }
      ]
    },
    warlock: {
      engrams: {},
      items: {}
    },
    titan: {
      engrams: {},
      items: {}
    }
  }
};

const defaultEquipped = {
  warlock: "test",
  titan: "",
  hunter: "Divinity"
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
      <h2>Inventory</h2>

      <div>
        warlock: {equipped.warlock}
        titan: {equipped.titan}
        hunter: {equipped.hunter}
      </div>

      <PostMasterSection
        name="Postmaster"
        hunter={inventoryQuery.postmaster.hunter}
        warlock={inventoryQuery.postmaster.warlock}
        titan={inventoryQuery.postmaster.titan}
      />
      <ItemSection name="Weapons" equipWeapon={equipWeapon} />
      <ItemSection name="Armor" equipWeapon={equipWeapon} />
      <ItemSection name="General" />
      <ItemSection name="Inventory" />
    </div>
  );
}
