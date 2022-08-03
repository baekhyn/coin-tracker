import CoinData from '../../context/data-context'

const CoinSelect = ({ coinChange }) => {
  return (
    <CoinData.Consumer>
      {(contex) => {
        return (
          <div>
            <label>Coin: </label>
            <select onChange={coinChange}>
              {contex.map((coin) => (
                <option key={coin.id} value={coin.quotes.USD.price}>
                  ({coin.symbol}): {coin.name} ${coin.quotes.USD.price} USD
                </option>
              ))}
            </select>
          </div>
        )
      }}
    </CoinData.Consumer>
  )
}

export default CoinSelect
// {()=>{return(data)=>원하는처리}}
