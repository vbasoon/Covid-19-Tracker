import React, {useState,useEffect} from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent
} from '@material-ui/core'
import './App.css';
import InfoBox from './InfoBox';
import Map from './Map';

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
      <div className="app__left">
        <div className="app__header">
      <h1>Covid Tracker</h1>
      <FormControl className="app__dropdown">
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
</div>
<div className="app__stats">
  <InfoBox title="Covid-19 cases" cases={123} total={20000}/>

  <InfoBox title="Recovered" cases={1234} total={19000}/>

  <InfoBox title="Deaths" cases={12345} total={1000}/>

  
</div>
<div>
  <Map/>
</div> 
<Card className="app__right">
  <CardContent>
      {/*Table
      Graph*/}
  </CardContent>
</Card>
</div>
     
      

      {/*
      Header
      Title + Select input dropdown field

      Infobox
      Infobox
      Infobox

     
      Map 
      */}

    </div>
  );
}

export default App;
