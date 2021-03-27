import React, { useRef, useState } from 'react';
import '../Style/App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { QueryObj } from './Utils'

function SearchBar (){
  const searchInputRef = useRef<HTMLFormElement>(null);
  // const searchCityRef = useRef<HTMLInputElement>(null);
  // const searchZipRef = useRef<HTMLInputElement>(null);

  interface QueryObj {
    address: string;
    city: string;
    zipcode: string;
  }

  // console.log(searchAddressRef.current)
  // const getResults = gql`
  //   query GetResults ($city: String, $street: String, $zipcode: String ) {
  //     landlords (city: $city, street: $street, zipcode: $zipcode){
  //       name
  //       id
  //       city
  //       state
  //       street
  //       zipcode
        

  //     }
  //   }
  // `

  const [query, setQuery] = useState<QueryObj| undefined> (undefined)
  let history = useHistory()

  const HandleClick = (event: Object) => {
    console.log('poop');
    let queryObj: QueryObj = {address: "default", city: "default", zipcode:"default"};
    // let queryObj: QueryObj = {address: "default"};
    // if (searchAddressRef && searchAddressRef.current && searchCityRef && searchCityRef.current && searchZipRef && searchZipRef.current) {
    if (searchInputRef.current) {
      console.log('searchAddRef.current',searchInputRef.current);
      queryObj = {
        address: searchInputRef.current['addressSearchBar'].value,
        city: searchInputRef.current['citySearchBar'].value,
        zipcode: searchInputRef.current['zipSearchBar'].value
      };
      console.log('queryObj', queryObj);
      setQuery(queryObj);
      history.push({
        pathname: "/searchresults",
        state: {
          query: query
        }
      })
    }

    // if (searchAddressRef.current && searchCityRef.current && searchZipRef.current) {
    //   console.log('searchAddRef.current',searchAddressRef.current);
    //   queryObj = {
    //     address: searchAddressRef.current.value,
    //     city: searchCityRef.current.value,
    //     zipcode: searchZipRef.current.value
    //   }
    // }
    console.log(queryObj);
    
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