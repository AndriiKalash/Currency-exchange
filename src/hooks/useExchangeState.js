import { useState } from 'react';

export const useExchangeState = () => {
  const [data, setData] = useState([]);
  const [rateFrom, setRateFrom] = useState(1);
  const [rateTo, setRateTo] = useState(1);
  const [currency, setCurrency] = useState('UAH');
  const [valueFrom, setValueFrom] = useState(1);
  const [valueTo, setValueTo] = useState(1);

  const onChangeValue = (value, direction) => {
    let price;
    if (direction === 'from') {
      setValueFrom(value);
      price = parseFloat(((value / rateTo) * rateFrom).toFixed(3));
      setValueTo(price);
    } else if (direction === 'to') {
      setValueTo(value);
      price = parseFloat(((value / rateFrom) * rateTo).toFixed(3));
      setValueFrom(price);
    }
  };

  const getRate = (currency, setRate, data) => {
    if (currency === 'UAH') {
      setRate(1);
    } else {
      const currencyData = data.find((obj) => obj.currency === currency);
      if (currencyData) {
        setRate(currencyData.rate);
      } else {
        console.warn(`Currency data not found for ${currency}`);
      }
    }
  };

  return {
    data,
    setData,
    setRateFrom,
    setRateTo,
    currency,
    setCurrency,
    valueFrom,
    valueTo,
    onChangeValue,
    getRate,
  };
};
