import React, { useRef, useState } from 'react';
import '../Style/App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { QueryObj } from './Utils'

function SearchBar (){
  const searchInputRef = useRef<HTMLFormElement>(null);

  interface QueryObj {
    address: string;
    city: string;
    zipcode: string;
  }

  const [query, setQuery] = useState<QueryObj| undefined> (undefined)
  let history = useHistory()

  const HandleClick = async (event: Object) => {
    let queryObj: QueryObj = {address: "default", city: "default", zipcode:"default"};

    if (searchInputRef.current) {
      queryObj = {
        address: searchInputRef.current['addressSearchBar'].value,
        city: searchInputRef.current['citySearchBar'].value,
        zipcode: searchInputRef.current['zipSearchBar'].value
      };

      await setQuery(queryObj);
      console.log(query)
      history.push({
        pathname: "/searchresults",
        state: {
          query: queryObj
        }
      })
    }
    
  }

  // return loading ? 
  // (<Spinner />)
  // :  
  return (

      <div className="SearchBar">
        <h1>RATEMYLANDLORDS</h1>
        <h2>Enter your city, zip code, or address to get started</h2>
        <form ref={searchInputRef} noValidate autoComplete="off">
          {/* <TextField id="standard-basic" label="Standard" /> */}
          {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
          <TextField name={"addressSearchBar"} label="Address" variant="outlined"/>
          <TextField name={"citySearchBar"} label="City" variant="outlined"/>
          <TextField name={"zipSearchBar"} label="Zip Code" variant="outlined"/>
        </form>
        <Button variant="contained" onClick={()=>HandleClick({123:456})}>Search</Button>
      </div>
  );
}

export default SearchBar