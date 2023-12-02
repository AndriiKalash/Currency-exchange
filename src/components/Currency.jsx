import { useEffect, useState } from 'react';
import { defaultCurrencies } from './constants';

export const Currency = ({ setCurrency, currency, getRate, setRate, data }) => {
  const [listCur, setListCur] = useState([]);
  const getClassNameSelect = () => {
    if (window.innerWidth <= 450 && currency !== 'UAH') {
      return 'active';
    }
    return !defaultCurrencies.includes(currency) ? 'active' : '';
  };

  useEffect(() => {
    const getListCurr = async () => {
      const list = await data.map((obj) => {
        return obj.currency;
      });
      setListCur(list);
    };
    getListCurr();
  }, [data]);

  return (
    <ul className="currencies">
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => {
            setCurrency(cur);
            getRate(cur, setRate, data);
          }}
          className={currency === cur ? 'active' : ''}
          key={cur}>
          {cur}
        </li>
      ))}
      <li className={getClassNameSelect()}>
        <select
          className={getClassNameSelect()}
          name="currency"
          value={currency}
          onChange={(e) => {
            setCurrency(e.target.value);
            getRate(e.target.value, setRate, data);
          }}>
          {listCur.map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>
      </li>
    </ul>
  );
};
