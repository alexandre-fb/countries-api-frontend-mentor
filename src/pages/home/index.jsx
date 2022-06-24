import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/header";
import { ThemeContext } from "../../contexts/themeContext";
import {
  getCountriesByRegion,
  getCountryByName,
  getAllCountries,
} from "../../services";

export const Home = () => {
  const { changeTheme } = useContext(ThemeContext);

  //=====start set all countries=====
  const [allCountries, setAllCountries] = useState();

  useEffect(() => {
    async function fetchAllCountries() {
      const apiData = await getAllCountries();
      setAllCountries(apiData);
    }

    fetchAllCountries();
  }, []);

  console.log("data", allCountries);
  //=====end set all countries=====

  //=====start set countries by region=====
  const [countriesByRegion, setCountriesByRegion] = useState();

  useEffect(() => {
    async function fetchCountriesByRegion() {
      const apiData = await getCountriesByRegion("europe");
      setCountriesByRegion(apiData);
    }

    fetchCountriesByRegion();
  }, []);

  console.log("data", countriesByRegion);
  //=====end set countries by region=====

  //=====start set countries by name=====
  const [countryByName, setCountryByName] = useState();

  useEffect(() => {
    async function fetchCountryByName() {
      const apiData = await getCountryByName("italy");
      setCountryByName(apiData);
    }

    fetchCountryByName();
  }, []);

  console.log("data", countryByName);
  //=====end set countries by region=====

  return (
    <Container>
      <Header />
      <ul>
        {countryByName &&
          countryByName.map((item, index) => (
            <li>
              <img src={item.flags.png} />
              {item.name.common}
            </li>
          ))}
      </ul>
      <h1>Ola</h1>
      <button onClick={() => changeTheme()}> Mudar tema</button>
    </Container>
  );
};

const Container = styled.div``;
