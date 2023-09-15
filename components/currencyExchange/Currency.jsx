import { useEffect, useState } from "react";
import currencyCountries from "./currencyCountries"
import './currency.scss'


function Currency() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD"); // Default to USD
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(1); // Default amount to 1
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRates, setExchangeRates] = useState(null); // Store the exchange rates
  
  

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://exchangerate-api.p.rapidapi.com/rapid/latest/USD';
      const RAPIDAPI_KEY = process.env.RAPID_API_KEY
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': `${RAPIDAPI_KEY}`,
          'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setToCurrency(Object.keys(data.rates)[0]);
        setExchangeRates(data.rates);
        console.log(data.rates) // Store the exchange rates
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency && exchangeRates) {
      // Calculate the converted amount
      const rate = currencyOptions.includes(fromCurrency) ? exchangeRates[toCurrency] : 1;
      setConvertedAmount((amount * rate).toFixed(2));
    }
  }, [fromCurrency, toCurrency, amount, exchangeRates]);

  const selectedCurrencyName = toCurrency || 'Unknown Currency';

  return (
    <div className="currency_input">
      <div className="input">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p>USD</p>
      </div>

      <span>Amount in you location</span>

      <div className="convertedTo">
        <span>{convertedAmount ? `${convertedAmount} ${selectedCurrencyName}` : 'Calculating...'} </span>
        <select
          className="select"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}
              className="options"
            >
              {currencyCountries[currency]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Currency;
