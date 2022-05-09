import CharacterSection from "../components/CharacterSection";

export default function Characters() {
  return (
    <body>
      <div>
        <h2>Characters</h2>
        <div class="CharacterEmblem">
          <div class="NameLight">
            <div> Hunter </div>
            <div> 1560 </div>
          </div>
          <div class="Race"> Human </div>
        </div>
        <CharacterSection
          name="Hunter"
          maximumPower={1560}
          mobility={39}
          resilience={64}
          recovery={73}
          discipline={34}
          intellect={43}
          strength={105}
        />
        <div class="CharacterEmblem">
          <div class="NameLight">
            <div> Warlock </div>
            <div> 1370 </div>
          </div>
          <div class="Race">Awoken </div>
        </div>
        <CharacterSection
          name="Warlock"
          maximumPower={1449}
          mobility={40}
          resilience={46}
          recovery={42}
          discipline={62}
          intellect={47}
          strength={32}
        />
        <div class="CharacterEmblem">
          <div class="NameLight">
            <div> Titan </div>
            <div> 1395 </div>
          </div>
          <div class="Race">Exo </div>
        </div>
        <CharacterSection
          name="Titan"
          maximumPower={1449}
          mobility={39}
          resilience={36}
          recovery={32}
          discipline={34}
          intellect={38}
          strength={38}
        />
      </div>
    </body>
  );
}
