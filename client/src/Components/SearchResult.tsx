import React, { useRef, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_RESULTS, QueryObj, GET_ALL_LANDLORDS} from './Utils'
import ResultsTable from './ResultsTable'

function SearchResult ( props: QueryObj | any | undefined ){
  // console.log(props.location.state.query)
  const { loading, data } = useQuery<any, QueryObj>(
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
        {/* {JSON.stringify(data)} */}
        <ResultsTable {...data.getResults}/>
      </div>
    )
  }

  return (
    <div>
      
    </div>
  )
}

export default SearchResult