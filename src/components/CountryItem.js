import styled from "@emotion/styled";
import { useState } from "react";



const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;
  cursor: pointer;
  @media (min-width: 900px) {
    flex: 0 0 33.33%;
  }
`;

const ListContent = styled.div`
  background-color: ${(props) => (props.isActive ? "#181837" : "#34345a")}; 
  margin: 5px;
  padding: 10px 0;
  border-radius: 8px;
  border:${(props) => (props.isActive ? `2px solid orange` : `none`)};
  color: #dee9e2;
`;
const CountryItem= ({
  country,
  onItemClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = (country) => {
    onItemClick(country);
    setIsActive(!isActive);
  };

  return (
    <ListItem key={country.ID} onClick={() => handleOnClick(country)}>
      <ListContent isActive={isActive}>
        <h2>{country.Country}</h2>
        <div>New Confirmed: {country.NewConfirmed}</div>
        <div>New Deaths: {country.NewDeaths}</div>
        <div>New Recovered: {country.NewRecovered}</div>
        {/* <br />
        <div>Total Confirmed: {country.TotalRecovered}</div>
        <div>Total Deaths: {country.TotalDeaths}</div>
        <div>Total Recovered: {country.TotalRecovered}</div> */}
      </ListContent>
    </ListItem>
  );
};

export default CountryItem;
