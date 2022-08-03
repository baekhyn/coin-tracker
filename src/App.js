import { useEffect, useState } from 'react'
import Result from './components/User/Result'
import UserForm from './components/User/UserForm'
import Card from './components/UI/Card'
import CoinData from './context/data-context'

function App() {
  const [coinData, setCoinData] = useState([])
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState()

  // API
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoinData(json)
        setLoading(false)
      })
  }, [])

  const formHandler = (uUsd, uCoin) => {
    setUserData({ usd: +uUsd, coin: +uCoin })
  }

  return (
    <Card>
      <CoinData.Provider value={coinData}>
        {/* 생략 가능 */}
        <h1> 💵 The Coins!</h1>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <UserForm formHandler={formHandler} />
            <Result entered={userData} />
          </div>
        )}
      </CoinData.Provider>
    </Card>
  )
}

export default App

// 가게에서 물건을 줄 수도 있지만
// 공장에서 바로 소비자가 받아올 수도 있다.

// 공장에 헬륨가스 가게 풍선을 만든다 소비자가 헬륨풍선

//공장에서 복숭아 세척 가게 통에다가 포장 소비자 복숭아
