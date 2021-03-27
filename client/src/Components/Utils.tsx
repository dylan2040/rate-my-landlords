import { gql} from '@apollo/client';

export const TEST_QUERY = gql`
  query  {
    hello
  }
`

export const GET_RESULTS = gql`
  query get_landlords($city: String, $street: String, $zipcode: String ) {
    getResults (city: $city, street: $street, zipcode: $zipcode){
      name
      id
      city
      state
      street
      zipcode
    }
  }
`

export const GET_ALL_LANDLORDS = gql`
  query($id: String) {
    getAllLandlords(id: $id) {
    name
    id
    city
    state
    street
    zipcode
  }}

`


export interface QueryObj {
  address: string;
  city: string;
  zipcode: string;
}
