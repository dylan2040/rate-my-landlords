import React, { useRef, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_RESULTS, QueryObj, GET_ALL_LANDLORDS} from './Utils'
import ResultsTable from './ResultsTable'

function SearchResult ( props: QueryObj | any | undefined ){
  console.log("Search Result passed down query prop:", props.location.state.query)
  
  const { loading, data, error} = useQuery<any, QueryObj>(
    GET_RESULTS,
    {variables: props.location.state.query}
  );

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
        {/* <div>{JSON.stringify(data)}</div> */}
        <ResultsTable {...data.findLandlordsByAddress}/>
      </div>
    )
  }
  if (error){
    return (
      <div>
        {JSON.stringify(error)}
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