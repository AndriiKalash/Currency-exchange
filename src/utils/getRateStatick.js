export const getRateStatick = (currency, data) => {
  const currencyData = data.find((obj) => obj.currency === currency);
  return currencyData ? currencyData.rate : null;
};
