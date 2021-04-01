import React, { useRef, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_RESULTS, QueryObj, GET_ALL_LANDLORDS} from './Utils'
import ResultsTable from './ResultsTable'
<<<<<<< HEAD

function SearchResult ( props: QueryObj | any | undefined ){
  console.log("Search Result passed down query prop:", props.location.state.query)
  
=======
function SearchResult ( props: QueryObj | any | undefined ){
  console.log(props.location.state.query)
>>>>>>> 2a33f75965a05d74c5608b50554418abae1b822c
  const { loading, data, error} = useQuery<any, QueryObj>(
    GET_RESULTS,
    {variables: props.location.state.query}
  );
<<<<<<< HEAD

=======
>>>>>>> 2a33f75965a05d74c5608b50554418abae1b822c
  if (loading) {
    return (
      <div>LOADING</div>
    )
  }
  if (data) {
    console.log('server response:',  data)
    return (
      <div>
        <h1>RATE MY LANDLORD</h1><br />
<<<<<<< HEAD
        {/* <div>{JSON.stringify(data)}</div> */}
        <ResultsTable {...data.findLandlordsByAddress}/>
      </div>
    )
  }
  if (error){
    return (
      <div>
        {JSON.stringify(error)}
=======
        <div>{JSON.stringify(data)}</div>
        <ResultsTable {...data.findLandlordsByAddress}/>
>>>>>>> 2a33f75965a05d74c5608b50554418abae1b822c
      </div>
    )
  }

  return (
    <div>
      fAILEd
    </div>
  )
}
export default SearchResult