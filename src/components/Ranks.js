export default function Ranks(props) {
  const rankResponse = [
    {
      rankNumber: 15,
      vendor: "Crucible",
      icon:
        "https://www.bungie.net/common/destiny2_content/icons/6db02eca22b460859566ab813bd3a24b.png",
      rankName: "Mythic III",
      miniIcon:
        "https://www.bungie.net/img/theme/destiny/icons/icon_pvprank_orange.png",
      experience: {
        total: 7119,
        currentForLevel: 669,
        totalForLevel: 1075
      },
      numberOfCompleteObjectives: 5,
      percentToReset: 71
    },
    {
      rankNumber: 1,
      vendor: "Glory",
      icon:
        "https://www.bungie.net/common/destiny2_content/icons/34586ea2c4de2ce5d0016b3d01cec934.png",
      rankName: "Mythic II",
      miniIcon:
        "https://www.bungie.net/img/theme/destiny/icons/icon_pvprank_red.png",
      experience: {
        total: 0,
        currentForLevel: 0,
        totalForLevel: 40
      },
      numberOfCompleteObjectives: 0,
      percentToReset: 0
    },
    {
      rankNumber: 4,
      vendor: "Gambit",
      icon:
        "https://www.bungie.net/common/destiny2_content/icons/6553afc58dc549376f9ec448bc8241b5.png",
      rankName: "Mythic II",
      miniIcon:
        "https://www.bungie.net/img/theme/destiny/icons/icon_rank_green.png",
      experience: {
        total: 355,
        currentForLevel: 105,
        totalForLevel: 250
      },
      numberOfCompleteObjectives: 0,
      percentToReset: 4
    },
    {
      rankNumber: 4,
      vendor: "Vanguard",
      icon:
        "https://www.bungie.net/common/destiny2_content/icons/01f764372255768a17c58458a9928766.png",
      rankName: "Fabled III",
      miniIcon:
        "https://www.bungie.net/img/theme/destiny/icons/icon_rank_blue.png",
      experience: {
        total: 5071,
        currentForLevel: 421,
        totalForLevel: 1050
      },
      numberOfCompleteObjectives: 0,
      percentToReset: 51
    },
    {
      rankNumber: 1,
      vendor: "Trials",
      icon:
        "https://www.bungie.net/common/destiny2_content/icons/c22e6ce422363f94c8597e6547f91023.png",
      rankName: "Mythic II",
      miniIcon:
        "https://www.bungie.net/img/theme/destiny/icons/icon_rank_gold.png",
      experience: {
        total: 0,
        currentForLevel: 0,
        totalForLevel: 50
      },
      numberOfCompleteObjectives: 0,
      percentToReset: 0
    },
    {
      rankNumber: 4,
      vendor: "Strange",
      icon:
        "https://www.bungie.net/common/destiny2_content/icons/83ffe18545ac2b81d30497becbf155bf.png",
      rankName: "Legend",
      miniIcon:
        "https://www.bungie.net/img/theme/destiny/icons/icon_rank_purple.png",
      experience: {
        total: 9351,
        currentForLevel: 351,
        totalForLevel: 1000
      },
      numberOfCompleteObjectives: 0,
      percentToReset: 94
    },
    {
      rankNumber: 7,
      vendor: "Gunsmith",
      icon:
        "https://www.bungie.net/common/destiny2_content/icons/3c17781a877efb9060a69211b4ac6da2.png",
      rankName: "Heroic I",
      miniIcon:
        "https://www.bungie.net/common/destiny2_content/icons/3c17781a877efb9060a69211b4ac6da2.png",
      experience: {
        total: 1640,
        currentForLevel: 90,
        totalForLevel: 375
      },
      numberOfCompleteObjectives: 0,
      percentToReset: 16
    }
  ];

  return (
    <div className="RanksSection">
      {rankResponse.map((rank, index) => (
        <div className="VendorInfo" key={index}>
          {
            <img
              value="VendorIcon"
              width="100px"
              height="100px"
              src={rank.icon}
              alt="VendorIcon"
            />
          }
          <div className="RankInfo">
            <div className="RankLevel">
              {rank.vendor} Rank {rank.rankNumber}
            </div>
            <div className="RankTitle">{rank.rankName}</div>
            <div className="RankNumber">
              {
                <img
                  value="cruciblerank"
                  width="10px"
                  height="10px"
                  src={rank.miniIcon}
                  alt="crucibleRankIcon"
                />
              }
              {`${rank.experience.total} (${rank.experience.currentForLevel}/${rank.experience.totalForLevel})`}
            </div>
            <div
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
            <div className="PercentToComplete">{`${rank.percentToReset}% to reset`}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
