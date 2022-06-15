export default function Ranks(props) {
  const rankResponse = [
    {
      rankNumber: 14,
      vendor: "Crucible",
      icon:
        "https://www.bungie.net/common/destiny2_content/icons/6db02eca22b460859566ab813bd3a24b.png",
      rankName: "Mythic II",
      experience: {
        total: 7119,
        currentForLevel: 669,
        totalForLevel: 1075
      },
      numberOfCompleteObjectives: 1,
      percentToReset: 71
    },
    {
      rankNumber: 14,
      vendor: "Glory",
      icon:
        "https://www.bungie.net/common/destiny2_content/icons/34586ea2c4de2ce5d0016b3d01cec934.png",
      rankName: "Mythic II",
      experience: {
        total: 7119,
        currentForLevel: 669,
        totalForLevel: 1075
      },
      numberOfCompleteObjectives: 5,
      percentToReset: 71
    },
    {
      rankNumber: 14,
      vendor: "Gambit",
      icon:
        "https://www.bungie.net/common/destiny2_content/icons/6553afc58dc549376f9ec448bc8241b5.png",
      rankName: "Mythic II",
      experience: {
        total: 7119,
        currentForLevel: 669,
        totalForLevel: 1075
      },
      numberOfCompleteObjectives: 0,
      percentToReset: 71
    }
  ];

  return (
    <div className="RanksSection">
      {rankResponse.map((rank, index) => (
        <div className="CrucibleRank" key={index}>
          {
            <img
              value="crucibleIcon"
              width="100px"
              height="100px"
              src={rank.icon}
              alt="crucibleIcon"
            />
          }
          <div className="CrucibleRankInfo">
            <div className="rankLevel">
              {rank.vendor} {rank.rankNumber}
            </div>
            <div className="rankTitle">{rank.rankName}</div>
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
              {`${rank.experience.total} (${rank.experience.currentForLevel}/${rank.experience.totalForLevel})`}
            </div>
            <div
              // className="rankCheckboxes"
              style={{
                display: "flex"
              }}
            >
              {Array(5)
                .fill(0)
                .map((i, index) => (
                  <div
                    key={index}
                    style={{
                      marginRight: ".2em",
                      padding: 0,
                      height: "14px",
                      width: "14px",
                      border: "1px solid #999",
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    {index < rank.numberOfCompleteObjectives ? (
                      <div
                        style={{
                          height: "8px",
                          width: "8px",
                          backgroundColor: "#e8a534"
                        }}
                      ></div>
                    ) : null}
                  </div>
                ))}
            </div>
            <div className="percentToComplete">{`${rank.percentToReset}% to reset`}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
