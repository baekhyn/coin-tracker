import { useState } from 'react';
import CoinSelect from './CoinSelect';

const UserForm = (props) => {
  const [usd, setUsd] = useState('');
  const [coin, setCoin] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(usd, coin);
    props.formHandler(usd, coin);
  };

  const usdChange = (event) => {
    setUsd(() => event.target.value);
  };

  const coinChange = (event) => {
    setCoin(() => event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='USD'>USD: </label>
      <input
        value={usd}
        id='USD'
        type='number'
        placeholder='$USD'
        onChange={usdChange}
      />
      <CoinSelect coins={props.data} coinChange={coinChange} />
      <button type='submit'>Convert</button>
    </form>
  );
};

export default UserForm;

/* <form onSubmit={onSubmit}>
<label htmlFor='USD'>USD:</label>
<input
  value={usd}
  onChange={onChange}
  id='USD'
  type='number'
  placeholder='$USD'
/>
<div>
  <label>Coin:</label>
  <select onChange={onSelect}>
    {coinData.map((coin) => (
      <option key={coin.id} value={coin.quotes.USD.price}>
        ({coin.symbol}): {coin.name} ${coin.quotes.USD.price} USD
      </option>
    ))}
  </select>
</div>
<button>Convert</button>
</form> */
