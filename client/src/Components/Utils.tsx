import { gql} from '@apollo/client';

export const TEST_QUERY = gql`
  query  {
    hello
  }
`

export const GET_RESULTS = gql`
<<<<<<< HEAD
  query get_landlords ($city: String, $street: String, $zipcode: String) {
    findLandlordsByAddress (street: $street, city: $city, zipcode: $zipcode){
=======
  query get_landlords($street: String, $city: String, $state: String, $zipcode: String) {
    findLandlordsByAddress(street: $street, city: $city, state: $state, zipcode: $zipcode){
>>>>>>> 2a33f75965a05d74c5608b50554418abae1b822c
      name
      id
      city
      state
      street
      zipcode
    }
  }
`

export const GET_LANDLORDS_LIST = gql`
query get_landlords_by_address($street: String, $city: String, $state: String) {
  findLandlordsByAddress(street: $street, city: $city, state: $state) {
    id
    name 
    street
    city 
    state 
    zipcdoe
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