export async function getCountriesByRegion(region) {
  const url = `https://restcountries.com/v3.1/region/${region}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getCountryByName(name) {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getCountryByCode(code) {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  const response = await fetch(url);
  return await response.json();
}
