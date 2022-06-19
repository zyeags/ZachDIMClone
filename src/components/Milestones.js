export default function Milestones() {
  return (
    <div className="MilestonesSection">
      Milestones & Challenges
      <div className="SeasonIcon">
        {
          <img
            value="VendorIcon"
            width="100px"
            height="100px"
            src="https://www.bungie.net/common/destiny2_content/icons/6d461c4e0f92434d1832714a0d34cc61.png"
            alt="VendorIcon"
          />
        }
      </div>
      <div className="SeasonInfo">
        <div>Seasonal Rank 78</div>
        <div>Season of the Haunted</div>
        <div>Season ends in Days Hours Minutes</div>
      </div>
    </div>
  );
}
