import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountryByCode } from "../../services";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Loader } from "../loader";
import {
  StyledMain,
  BackButton,
  FlagAndDataContainer,
  Flag,
  DataContainer,
  NameCountry,
  FirstColumn,
  SecondColumn,
  BorderCountriesContainer,
  Countries,
  Country,
  DetailsContainer,
} from "./styles";

export const MainCountryDetail = () => {
  const [dataCountry, setDataCountry] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { countryCode } = useParams();

  //=====set data country=====
  useEffect(() => {
    const fetchDataCountry = async () => {
      const apiData = await getCountryByCode(countryCode);
      setDataCountry({
        flag: apiData[0].flags.svg,
        name: apiData[0].name.common,
        nativeName: apiData[0].name.nativeName,
        population: apiData[0].population,
        region: apiData[0].region,
        subRegion: apiData[0].subregion,
        capital: apiData[0].capital,
        tld: apiData[0].tld,
        currencies: apiData[0].currencies,
        languages: apiData[0].languages,
        borders: apiData[0].borders,
      });
    };
    fetchDataCountry();
    setIsLoading(false);
  }, [countryCode]);

  return (
    <StyledMain>
      <Link to="/">
        <BackButton>
          <HiArrowNarrowLeft />
          <span>Back</span>
        </BackButton>
      </Link>

      {isLoading ? (
        <Loader />
      ) : (
        dataCountry && (
          <FlagAndDataContainer>
            <Flag src={dataCountry.flag} />

            <DataContainer>
              <NameCountry>{dataCountry.name}</NameCountry>

              <DetailsContainer>
                <FirstColumn>
                  <li>
                    <h4>Native Name: </h4>
                    <span>
                      {Object.values(dataCountry.nativeName)[0].common}
                    </span>
                  </li>
                  <li>
                    <h4>Population: </h4>
                    <span>{dataCountry.population}</span>
                  </li>
                  <li>
                    <h4>Region: </h4>
                    <span>{dataCountry.region}</span>
                  </li>
                  <li>
                    <h4>Sub Region: </h4>
                    <span>{dataCountry.subRegion}</span>
                  </li>
                  <li>
                    <h4>Capital: </h4>
                    <span>{dataCountry.capital}</span>
                  </li>
                </FirstColumn>
                <SecondColumn>
                  <li>
                    <h4>Top Level Domain: </h4>
                    <span>{dataCountry.tld.map((tld) => tld).join(", ")}</span>
                  </li>
                  <li>
                    <h4>Currencies: </h4>
                    <span>{Object.values(dataCountry.currencies)[0].name}</span>
                  </li>
                  <li>
                    <h4>Languages:</h4>
                    <span>
                      {Object.values(dataCountry.languages)
                        .map((language) => language)
                        .join(", ")}
                    </span>
                  </li>
                </SecondColumn>
              </DetailsContainer>

              <BorderCountriesContainer>
                <h4>Border Countries:</h4>
                <Countries>
                  {dataCountry.borders ? (
                    dataCountry.borders.map((country, index) => (
                      <Link key={index} to={`/detail/${country}`}>
                        <Country>{country}</Country>
                      </Link>
                    ))
                  ) : (
                    <Country>Has no border countries</Country>
                  )}
                </Countries>
              </BorderCountriesContainer>
            </DataContainer>
          </FlagAndDataContainer>
        )
      )}
    </StyledMain>
  );
};
