import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { regionsName } from "./regions-name";
import {
  getCountriesByRegion,
  getCountryByName,
  getAllCountries,
} from "../../services";
import {
  Container,
  SearchArea,
  SearchByNameContainer,
  SelectByRegionContainer,
  Selector,
  Regions,
  Countries,
  Country,
  Flag,
  ContainerData,
  Name,
  Data,
} from "./styles";
import { Loader } from "../loader";
import { NotFoundMessage } from "../not-found-message.jsx";
// import { Loader } from "../loader";

export const MainHome = () => {
  const [selectRegionIsClicked, setSelectRegionIsClicked] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("america");

  const [countryNameTyped, setCountryNameTyped] = useState("");
  // const [allCountries, setAllCountries] = useState();
  const [countriesByRegion, setCountriesByRegion] = useState();
  const [countryByName, setCountryByName] = useState();
  const [dataToShow, setDataToShow] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log("countryNameTyped", countryNameTyped);

  console.log("selectedRegion", selectedRegion);

  console.log("dataToShow", dataToShow);

  useEffect(() => {
    setDataToShow(countriesByRegion);
    countryByName && !countryByName.message && setDataToShow(countryByName);
    setIsLoading(false);
  }, [countryByName, countriesByRegion]);

  //=====start set all countries=====

  // useEffect(() => {
  //   async function fetchAllCountries() {
  //     const apiData = await getAllCountries();
  //     setAllCountries(apiData);
  //   }

  //   fetchAllCountries();
  // }, []);

  // console.log("allCountries", allCountries);
  //=====end set all countries=====

  //=====start set countries by region=====

  useEffect(() => {
    async function fetchCountriesByRegion() {
      const apiData = await getCountriesByRegion(selectedRegion);
      setCountriesByRegion(apiData);
    }

    fetchCountriesByRegion();
  }, [selectedRegion]);

  console.log("countriesByRegion", countriesByRegion);
  //=====end set countries by region=====

  //=====start set countries by name=====

  useEffect(() => {
    async function fetchCountryByName() {
      const apiData = await getCountryByName(countryNameTyped);
      setCountryByName(apiData);
    }

    fetchCountryByName();
  }, [countryNameTyped]);

  console.log("countryByName", countryByName);
  //=====end set countries by region=====

  // useEffect(() => {
  //   function setarData() {
  //     if (countryByName !== "Page Not Found") {
  //       countryByName && setDataToShow(countryByName);
  //     } else {
  //       allCountries && setDataToShow(allCountries);
  //     }
  //   }
  //   setarData();
  // }, [countryNameTyped]);

  return (
    <Container>
      <SearchArea>
        <SearchByNameContainer>
          <label htmlFor="search-by-name">
            <FaSearch />
          </label>
          <input
            type="text"
            id="search-by-name"
            placeholder="Search for a country..."
            value={countryNameTyped}
            onChange={(event) => {
              setCountryNameTyped(event.target.value), setIsLoading(true);
            }}
          ></input>
        </SearchByNameContainer>

        <SelectByRegionContainer>
          <Selector
            onClick={() => setSelectRegionIsClicked(!selectRegionIsClicked)}
          >
            <span>Filter by Region</span>
            <MdExpandMore />
          </Selector>

          <Regions isClicked={selectRegionIsClicked}>
            {regionsName.map((item, index) => (
              <li
                key={index}
                onClick={() => (
                  setSelectedRegion(item),
                  setSelectRegionIsClicked(!selectRegionIsClicked),
                  setIsLoading(true)
                )}
              >
                {item}
              </li>
            ))}
          </Regions>
        </SelectByRegionContainer>
      </SearchArea>

      {isLoading === true ? (
        <Loader />
      ) : countryByName?.message ===
        "Internal Server Error: ClassCastException: attempting to castjar:file:/dev.amatos.restcountries.jar!/javax/ws/rs/ext/RuntimeDelegate.class to jar:file:/dev.amatos.restcountries.jar!/javax/ws/rs/ext/RuntimeDelegate.class" ? (
        <NotFoundMessage />
      ) : (
        <Countries>
          {dataToShow &&
            dataToShow.map((item, index) => {
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
