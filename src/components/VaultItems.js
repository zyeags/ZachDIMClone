export default function VaultItems(props) {
  return (
    <div>
      <ul>
        {
          <img
            value="glimmer"
            width="20px"
            height="20px"
            src="https://www.pngkit.com/png/detail/346-3469999_destiny-2-glimmer-png.png"
            alt="glimmer"
          />
        }{" "}
        {props.glimmer}{" "}
        {
          <img
            value="glimmer"
            width="20px"
            height="20px"
            src="https://www.highgroundgaming.com/wp-content/uploads/2021/05/Legendary-Shards.png"
            alt="glimmer"
          />
        }{" "}
        {props.shards}{" "}
        {
          <img
            value="glimmer"
            width="20px"
            height="20px"
            src="https://freight.cargo.site/t/original/i/da53705ea01ba7bcab3817970200af9ef4ebd1a1355196a8114146da61ead3e2/dust.png"
            alt="glimmer"
          />
        }{" "}
        {props.shards}
      </ul>
    </div>
  );
}
