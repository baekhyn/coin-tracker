const Result = ({ entered }) => {
  return (
    <div>
      {entered ? (
        <h2>{`🪙 You can get ${Math.round(
          entered.usd / entered.coin
        )} Coin`}</h2>
      ) : (
        <h2>Convert coin</h2>
      )}
    </div>
  );
};

export default Result;
