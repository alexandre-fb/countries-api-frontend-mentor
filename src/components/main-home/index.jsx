import { useEffect, useState } from "react";

import { getCountriesByRegion, getCountryByName } from "../../services";
import {
  Container,
  Countries,
  Country,
  Flag,
  ContainerData,
  Name,
  Data,
} from "./styles";
import { Loader } from "../loader";
import { NotFoundMessage } from "../not-found-message.jsx";
import { SearchArea } from "../search-area";
import { MdOutlineNoStroller } from "react-icons/md";

export const MainHome = () => {
  const [selectRegionIsClicked, setSelectRegionIsClicked] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("america");
  const [countryNameTyped, setCountryNameTyped] = useState("");
  const [countriesByRegion, setCountriesByRegion] = useState();
  const [countryByName, setCountryByName] = useState();
  const [countriesToShow, setCountriesToShow] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //=====set countries to show=====
  useEffect(() => {
    countryNameTyped !== "" && countryByName && !countryByName.message
      ? setCountriesToShow(countryByName)
      : countriesByRegion && setCountriesToShow(countriesByRegion);
    setIsLoading(false);
  }, [countryByName, countryNameTyped, countriesByRegion]);

  //=====set countries by region=====
  useEffect(() => {
    async function fetchCountriesByRegion() {
      const apiData = await getCountriesByRegion(selectedRegion);
      setCountriesByRegion(apiData);
    }

    fetchCountriesByRegion();
  }, [selectedRegion]);

  //=====set countries by name=====
  useEffect(() => {
    async function fetchCountryByName() {
      const apiData = await getCountryByName(countryNameTyped);
      setCountryByName(apiData);
    }

    countryNameTyped !== "" && fetchCountryByName();
  }, [countryNameTyped]);

  return (
    <Container>
      <SearchArea
        setCountryNameTyped={setCountryNameTyped}
        setIsLoading={setIsLoading}
        setSelectRegionIsClicked={setSelectRegionIsClicked}
        selectRegionIsClicked={selectRegionIsClicked}
        countryNameTyped={countryNameTyped}
        setSelectedRegion={setSelectedRegion}
        setCountryByName={setCountryByName}
      />

      {isLoading === true ? (
        <Loader />
      ) : countryByName?.message ===
        "Internal Server Error: ClassCastException: attempting to castjar:file:/dev.amatos.restcountries.jar!/javax/ws/rs/ext/RuntimeDelegate.class to jar:file:/dev.amatos.restcountries.jar!/javax/ws/rs/ext/RuntimeDelegate.class" ? (
        <NotFoundMessage />
      ) : (
        <Countries>
          {countriesToShow &&
            countriesToShow.map((item, index) => {
              return (
                <Country key={index}>
                  <Flag img={item.flags.png}></Flag>
                  <ContainerData>
                    <Name>{item.name.common}</Name>
                    <Data>
                      <li>Population: {item.population}</li>
                      <li>Region: {item.region}</li>
                      <li>Capital: {item.capital}</li>
                    </Data>
                  </ContainerData>
                </Country>
              );
            })}
        </Countries>
      )}
    </Container>
  );
};
