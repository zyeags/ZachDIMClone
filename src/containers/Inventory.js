import ItemSection from "../components/ItemSection";

export default function Inventory() {
  return (
    <div>
      <h2>Inventory</h2>
      <ItemSection
        name="Postmaster"
        weapons={["Divinity,", " Gjally,"]}
        armor={["Lost Pacific Helm"]}
        currency={["Strange Coins,", " Treasure Keys,", " Enhancement Cores"]}
      />
      <ItemSection name="Weapons" />
      <ItemSection name="Armor" />
      <ItemSection name="General" />
      <ItemSection name="Inventory" />
    </div>
  );
}
