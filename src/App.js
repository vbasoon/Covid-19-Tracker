import React, {useState,useEffect} from 'react'
import {
  FormControl,
  Select,
  MenuItem
} from '@material-ui/core'
import './App.css';

function App() {
  const [countries, setCountries] = useState(['USA','UK','Ukraine']);
  const [country, setCountry] = useState('worldWide')
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) =>({
          name: country.country,
          value: country.countryInfo.iso2
        }));

        setCountries(countries);
      });
    };
    getCountriesData()
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    console.log('TOOOOO >>>>>', countryCode)

  }
  return (
    <div className="App">
      <div className="app__header">
      <h1>Covid Tracker</h1>
      <FormControl className="app_dropdown">
        <Select 
          variant="outlined"
          onChange={onCountryChange}
          value={country}
        >
<MenuItem value="worldWide">Worlwide</MenuItem>
          {
            countries.map((country) =>(
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))
          }
          {/* 
          <MenuItem value="worldWide">Option 2</MenuItem>
          <MenuItem value="worldWide">Option 3</MenuItem>
          <MenuItem value="worldWide">Option 4</MenuItem>   */}
        </Select>
      </FormControl>



      {/*
      Header
      Title + Select input dropdown field

      Infobox
      Infobox
      Infobox

      Table
      Graph
      Map 
      */}
</div>
    </div>
  );
}

export default App;
