import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currencies, setCurrencies] = useState<{
    [type: string]: string
  }>({})
  useEffect(()=>{
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json').then((res) => res.json())
    .then((json) => {
      setCurrencies(json)
    })
  }, [])
  return (
    <div className="App">
      <ul>
        {Object.keys(currencies).map((key: string)=> 
          <li>{currencies[key]}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
