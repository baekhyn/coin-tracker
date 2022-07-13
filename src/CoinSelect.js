const CoinSelect = ({ coins, coinChange }) => {
  return (
    <div>
      <label>Coin: </label>
      <select onChange={coinChange}>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            ({coin.symbol}): {coin.name} ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
};

export default CoinSelect;
