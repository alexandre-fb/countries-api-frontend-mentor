import {
  Container,
  SearchByNameContainer,
  SelectByRegionContainer,
  Selector,
  Regions,
} from "./styles";
import { FaSearch } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { regionsName } from "./regions-name";

export const SearchArea = ({
  setCountryNameTyped,
  countryNameTyped,
  setIsLoading,
  setSelectRegionIsClicked,
  selectRegionIsClicked,
  setSelectedRegion,
}) => {
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
            setCountryNameTyped(event.target.value);
            // setCountriesByRegion('');
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
                setIsLoading(true),
                setCountryNameTyped("")
              )}
            >
              {item}
            </li>
          ))}
        </Regions>
      </SelectByRegionContainer>
    </Container>
  );
};
