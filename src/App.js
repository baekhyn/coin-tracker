import { useEffect, useState } from 'react';
import Result from './Result';
import UserForm from './UserForm';
import Card from './UI/Card';

function App() {
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();
  // API
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoinData(json);
        setLoading(false);
      });
  }, []);

  const formHandler = (uUsd, uCoin) => {
    setUserData({ usd: +uUsd, coin: +uCoin });
  };

  return (
    <Card>
      <h1> 💵 The Coins!</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <UserForm data={coinData} formHandler={formHandler} />
          <Result entered={userData} />
        </div>
      )}
    </Card>
  );
}

export default App;
