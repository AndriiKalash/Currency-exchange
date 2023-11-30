export const fetchData = async () => {
  try {
    const response = await fetch(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    );
    const json = await response.json();
    return json.map(transformData);
  } catch (error) {
    console.warn(error);
    throw new Error('Could not fetch data');
  }
};

const transformData = (json) => {
  return {
    currency: json.cc,
    rate: json.rate,
    id: json.r030,
  };
};
