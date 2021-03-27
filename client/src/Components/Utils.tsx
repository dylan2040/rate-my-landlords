import { gql} from '@apollo/client';

export const getResults = gql`
  query GetResults ($city: String, $street: String, $zipcode: String ) {
    landlords (city: $city, street: $street, zipcode: $zipcode){
      name
      id
      city
      state
      street
      zipcode
      

    }
  }
`
export interface QueryObj {
  address: string;
  city: string;
  zipcode: string;
}
