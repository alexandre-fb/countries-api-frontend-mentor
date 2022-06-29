import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getCountryByCode } from "../../services";
import { PrimaryButton } from "../primary-button";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Loader } from "../loader";
import { BoxWithShadow } from "../box-with-shadow";

export const MainCountryDetail = () => {
  const [dataCountry, setDataCountry] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { code } = useParams();

  console.log(dataCountry && dataCountry);
  // const nameoficial = dataCountry && dataCountry.name.nativeName;
  // const nameOficialCoisado = dataCountry && Object.values(nameoficial);
  // console.log("nameoficial", nameoficial);
  // console.log("nameOficialCoisado", nameOficialCoisado);

  //=====set data country=====
  useEffect(() => {
    const fetchDataCountry = async () => {
      const apiData = await getCountryByCode(code);
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
  }, [code]);

  return (
    <Container>
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

              <Details>
                <li>
                  <span>Native Name: </span>
                  {Object.values(dataCountry.nativeName)[0].common}
                </li>
                <li>
                  <span>Population: </span>
                  {dataCountry.population}
                </li>
                <li>
                  <span>Region: </span>
                  {dataCountry.region}
                </li>
                <li>
                  <span>Sub Region: </span> {dataCountry.subRegion}
                </li>
                <li>
                  <span>Capital: </span>
                  {dataCountry.capital}
                </li>
                <li>
                  <span>Top Level Domain: </span>
                  {dataCountry.tld.map((item) => `'${item}'`).join(", ")}
                </li>
                <li>
                  <span>Currencies: </span>
                  {Object.values(dataCountry.currencies)[0].name}
                </li>
                <li>
                  <span>Languages:</span>{" "}
                  {Object.values(dataCountry.languages)
                    .map((item) => item)
                    .join(", ")}
                </li>
              </Details>

              <BorderCountriesContainer>
                <span>Border Countries:</span>
                <Countries>
                  {dataCountry.borders ? (
                    dataCountry.borders.map((item, index) => (
                      <Link to={`/detail/${item}`}>
                        <Country index={index}>{item}</Country>
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
    </Container>
  );
};

export const Container = styled.main`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const BackButton = styled(PrimaryButton)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const FlagAndDataContainer = styled.section`
  display: flex;
  gap: 100px;
  align-items: center;
`;

export const Flag = styled.img`
  width: 45%;
  min-width: 450px;
`;

export const DataContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  width: 45%;
`;

export const NameCountry = styled.h2`
  font-size: 1.7rem;
  font-weight: 800;
`;

export const Details = styled.ul`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  gap: 10px;

  width: 100%;
  height: 120px;

  span {
    font-weight: 600;
  }
`;

export const BorderCountriesContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 30px;

  span {
    font-weight: 600;
  }
`;

export const Countries = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Country = styled(BoxWithShadow).attrs({ as: "li" })`
  padding: 10px 15px;
`;
