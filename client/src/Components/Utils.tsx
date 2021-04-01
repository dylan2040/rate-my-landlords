import { gql} from '@apollo/client';

export const TEST_QUERY = gql`
  query  {
    hello
  }
`

export const GET_RESULTS = gql`
  query get_landlords ($city: String, $street: String, $zipcode: String) {
    findLandlordsByAddress (street: $street, city: $city, zipcode: $zipcode){
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
  query findLandordById($id: String) {
    findLandordById(id: $id) {
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

export interface IdQuery {
  id: string;
}