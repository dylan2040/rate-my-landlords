import React, { useRef, useState }  from 'react'
import Container from '@material-ui/core/Container'
import StatBox from './StatBox'

import '../Style/LandlordProfile.css';
import { gql, useQuery } from '@apollo/client';
import { GET_RESULTS, QueryObj, GET_ALL_LANDLORDS, IdQuery} from './Utils'

function LandLordProfile (props: any | undefined){
  console.log('look here for state', typeof(props.location.state), props.location.state)

  const { loading, data, error } = useQuery<any, IdQuery>(
    GET_ALL_LANDLORDS,
    {variables: {id: props.location.state}}
  );
  const [example, setExample] = useState(
    {
      LandlordStats: {
        name: "landlord1",
        overallRating: 4.0,
        wouldRentAgainLevel: 4.5,
        tags: ["apple pie, test user 1, this better work"],
        friendlinessRating: 4.5,
        communicationRating: 4.2,
        maintenanceRating: 4.9,
        responsivenessRating: 4.0,
        transactionsIssues: 4.0,
      },
      LandlordReviews: [{
        wouldRentAgain: true,
        friendlinessRating: 3,
        communicationRating: 4, 
        responsivenessRating: 3,
        maintenanceRating: 4,
        transactionIssues: false,
        user:"user1"
      },{
        wouldRentAgain: true,
        friendlinessRating: 3,
        communicationRating: 2, 
        responsivenessRating: 3,
        maintenanceRating: 4,
        transactionIssues: true,
        user: "user2"
      }],
      PropertyReviews: [{
        moveInDate: "2/3/19",
        moveOutDate: "9/10/19",
        cleanliness: 3,
        neighborsVibes: ["great, quiet, noisy, everything"],
        propertyIssues: ["squeky floorsss squeek suehfnp9ieo"],
        noiseLevelRating: 1,
        user: "user1"
      },{
        moveInDate: "2/3/20",
        moveOutDate:  "9/10/19",
        cleanliness: 4,
        neighborsVibes: ["great, quiet, noisy, everything"],
        propertyIssues: ["squeky floorsss squeek suehfnp9ieo"],
        noiseLevelRating: 2,
        user: "user2"
      }]
    }
  );

  /*
      overallRating: Int ,
      wouldRentAgainLevel: Int ,
      tags: [String],
      friendlinessRating: Int ,
      communicationRating: Int ,
      maintenanceRating: Int,
      responsivenessRating: Int,
  */
  // if(error){
  //   return(
  //     <div>
  //       {JSON.stringify(error)}
  //     </div>
  //   )
  // }

  return (
    <Container id = 'landlordProfile'>
      <h1 className='header'>{example.LandlordStats.name}</h1>
      <StatBox {...example.LandlordStats} />
    </Container>
  )
}

export default LandLordProfile