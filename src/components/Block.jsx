import React, { useEffect } from 'react';
import { useExchangeState } from '../hooks/useExchangeState';
import { Currency } from './index';

export const Block = ({ data, value, onChangeValue, setRate, direction }) => {
  const { getRate, setCurrency, currency } = useExchangeState();

  useEffect(() => {
    getRate(currency, setRate, data);
    onChangeValue(value, direction);
  }, [currency, setCurrency, setRate]);

  return (
    <div className="block">
      <Currency
        currency={currency}
        setCurrency={setCurrency}
        getRate={getRate}
        setRate={setRate}
        data={data}
      />
      <input
        name="value"
        onChange={(e) => onChangeValue(e.target.value, direction)}
        value={value}
        type="number"
        placeholder={0}
      />
    </div>
  );
};
