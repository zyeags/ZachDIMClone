export default function Ranks(props) {
  return (
    <div>
      <div className="RanksSection">
        <div className="CrucibleRank">
          {
            <img
              value="crucibleIcon"
              width="100px"
              height="100px"
              src="https://www.bungie.net/common/destiny2_content/icons/6db02eca22b460859566ab813bd3a24b.png"
              alt="crucibleIcon"
            />
          }
          <div className="CrucibleRankInfo">
            <div className="rankLevel"> Crucible Rank 14</div>
            <div className="rankTitle"> Mythic II</div>
            <div className="rankNumber">
              {
                <img
                  value="cruciblerank"
                  width="10px"
                  height="10px"
                  src="https://www.bungie.net/img/theme/destiny/icons/icon_pvprank_orange.png"
                  alt="crucibleRankIcon"
                />
              }
              {"7119 (669/1075)"}
            </div>
            <div className="rankCheckboxes">checkboxes</div>
            <div className="percentToComplete">{"71% to reset"}</div>
          </div>
        </div>
        <div className="gloryRank">
          {
            <img
              value="gloryIcon"
              width="100px"
              height="100px"
              src="https://www.bungie.net/common/destiny2_content/icons/34586ea2c4de2ce5d0016b3d01cec934.png"
              alt="crucibleIcon"
            />
          }
          <div className="CrucibleRankInfo">
            <div className="rankLevel"> Glory Rank 1</div>
            <div className="rankTitle"> Guardian I</div>
            <div className="rankNumber">
              {
                <img
                  value="cruciblerank"
                  width="10px"
                  height="10px"
                  src="https://www.bungie.net/img/theme/destiny/icons/icon_pvprank_orange.png"
                  alt="crucibleRankIcon"
                />
              }
              {"0 (0/40)"}
            </div>
            <div className="rankCheckboxes">checkboxes</div>
            <div className="percentToComplete">{"0% to reset"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
