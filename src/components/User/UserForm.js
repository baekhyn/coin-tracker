import { useState } from 'react'
import CoinSelect from './CoinSelect'

const UserForm = (props) => {
  const [usd, setUsd] = useState('')
  const [coin, setCoin] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(usd, coin)
    props.formHandler(usd, coin)
  }

  const usdChange = (event) => {
    setUsd(() => event.target.value)
  }

  const coinChange = (event) => {
    setCoin(() => event.target.value)
  }

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
      <CoinSelect coinChange={coinChange} />
      <button type='submit'>Convert</button>
    </form>
  )
}

export default UserForm
