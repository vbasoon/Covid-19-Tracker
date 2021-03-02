import React, {useState,useEffect} from 'react'
import {
  FormControl,
  Select,
  MenuItem
} from '@material-ui/core'
import './App.css';

function App() {
  const [countries, setCountries] = useState(['USA','UK','Ukraine']);
  return (
    <div className="App">
      <div className="app__header">
      <h1>Covid Tracker</h1>
      <FormControl className="app_dropdown">
        <Select 
          variant="outlined"
          value="abc"
        >

          {
            countries.map((country) =>(
              <MenuItem value={country}>{country}</MenuItem>
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
