export default function Ranks(props) {
  return (
    <div>
      <div className="RanksSection">
        <div className="CrucibleRank">
          {
            <img
              value="crucible"
              width="100px"
              height="100px"
              src="https://www.bungie.net/common/destiny2_content/icons/6db02eca22b460859566ab813bd3a24b.png"
              alt="cruciblerank"
            />
          }
          <div className="CrucibleRankInfo">
            <div className="CrucibleRankLevel"> Crucible Rank 14</div>
            <div className="CrucibleRankTitle"> Mythic II</div>
          </div>
        </div>
      </div>
    </div>
  );
}
