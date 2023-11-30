import React, { useEffect } from 'react';
import { Block, Header } from './components/index';
import { useExchangeState } from './hooks/useExchangeState';
import { fetchData } from './utils/api';
import './index.scss';

function App() {
  const {
    data,
    setData,
    setRateFrom,
    setRateTo,
    valueFrom,
    valueTo,
    onChangeValue,
  } = useExchangeState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetchData();
      setData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <Header data={data} />
      <div className="calculator">
        <Block
          value={valueFrom}
          direction="from"
          onChangeValue={onChangeValue}
          setRate={setRateFrom}
          data={data}
        />
        <Block
          value={valueTo}
          direction="to"
          onChangeValue={onChangeValue}
          setRate={setRateTo}
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
