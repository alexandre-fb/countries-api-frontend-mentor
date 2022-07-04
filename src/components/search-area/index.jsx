import {
  Container,
  SearchByNameContainer,
  SelectByRegionContainer,
  Selector,
  Regions,
  Region,
} from "./styles";
import { FaSearch } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { regionsName } from "./regions-name";
import { useState, useEffect } from "react";

export const SearchArea = ({
  setCountryNameTyped,
  countryNameTyped,
  setIsLoading,
  setSelectRegionIsClicked,
  selectRegionIsClicked,
  setSelectedRegion,
  selectedRegion,
}) => {
  const handleSelectRegionClick = (region) => {
    region !== selectedRegion &&
      (setSelectedRegion(region), setIsLoading(true)),
      setSelectRegionIsClicked(!selectRegionIsClicked),
      setCountryNameTyped("");
  };

  return (
    <Container>
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
            setCountryNameTyped(event.target.value)
          }}
        ></input>
      </SearchByNameContainer>

      <SelectByRegionContainer selectedRegion={selectedRegion}>
        <Selector
          onClick={() => setSelectRegionIsClicked(!selectRegionIsClicked)}
        >
          <span>Filter by Region</span>
          <MdExpandMore />
        </Selector>

        <Regions isClicked={selectRegionIsClicked}>
          {regionsName.map((region, index) => (
            <Region
              selectedRegion={selectedRegion}
              className={region}
              key={index}
              onClick={() => handleSelectRegionClick(region)}
            >
              {region}
            </Region>
          ))}
        </Regions>
      </SelectByRegionContainer>
    </Container>
  );
};
