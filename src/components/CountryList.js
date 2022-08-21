import styled from "@emotion/styled";
import CountryItem from "./CountryItem";


const ListWrapper = styled.ul`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid orange;
  border-radius: 8px;
  background-color: cyan;
`;

const CountryList = ({
  countries,
  onItemClick,
}) => {
  return (
    <ListWrapper>
      {countries.map((country) => (
        <CountryItem country={country} onItemClick={onItemClick} />
      ))}
    </ListWrapper>
  );
};

export default CountryList;
