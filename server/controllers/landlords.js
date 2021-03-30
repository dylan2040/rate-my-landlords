const axios = require('axios')
require('dotenv').config()

/*-------------------------------------COMMON HEADERS-------------------------------------*/
axios.defaults.headers.common['accept'] = 'application/json'
axios.defaults.headers.common['apikey'] = process.env.ATOM_KEY
/*-------------------------------------COMMON HEADERS-------------------------------------*/


const findLandlordsByAddress = async (__, args, context) => {
  let propertyList
  try {
    propertyList = await fetchPropertiesByAddress(args)
    return propertyList 
  }catch(err) {
    return (err)
  }
}

const fetchPropertiesByAddress = async ({street, city, state}) => {
  const url = process.env.ATOM_URL_FULL_ADDRESS 
  const res = await axios.get(url, {
    params: {
      address1: street, 
      address2: city + ' ' + state
    }
  })

  if(res.data?.property) {
    const properties = res.data.property.map(property => (
      {
        name: `${property.assessment.owner?.owner1?.firstNameAndMi || ''} ${property.assessment.owner?.owner1?.lastName || ''}`, 
        id: property.identifier.attomId, 
        street: property.address.line1, 
        city: property.address.locality, 
        state: property.address.countrySubd, 
        zipcode: property.address.postal1
      }
    ))
    return properties 
  }else return [{name: "No results found", id: "0", street:  "No results found", city:  "No results found", state:  "No results found", zipcode:  "No results found"}]
}

const fetchPropertiesByZipcode = async ({zipcode}) => { 
  const url = process.env.ATOM_URL_ZIP_CODE_ONLY
  const res = await axios.get(url, {
    params: {

    }
  })
}


const generatePropertyInDb = (propertyList) => {
  const {landlordSchema, propertySchema, reviewsSchema } = propertyList 


  const propertyObj = {
    landlord: "", 
    address: {
      streetAddress1: addressObj.line1,
      streetAddress2: addressObj.line2, 
      city: addressObj.locality, 
      state: addressObj.countrySubd,
      zipcode: addressObj.postal1,
    }, 
    management: "", 
    type: propSummary.propClass, 
    cleanliness: Math.random() * 5.1, 
    neighborsVibes: [], 
    propertyIssues: [], 
    noiseLevelRating: Math.random() * 5.1,
    reviews: [],
  }
}

const generateLandlordInDb = () => {
  const landlordObj = {
    firstName: "", 
    lastName: "",
    overallRating: Math.random() * 5.1,
    wouldRentAgainLevel: Math.random() * 5.1,
    tags: [], 
    friendlinessRating: Math.random() * 5.1,
    communcicationRating: Math.random() * 5.1,
    maintenanceRating: Math.random() * 5.1,
    responsivenessRating: Math.random() * 5.1,
    transactionIssue: Math.random() * 101
  }
}

const findLandordById = async (__, args, context) => {
  const landlordId = context.id 
  return {
    name: "Landlor name here"
  }
}

module.exports =  {
  findLandlordsByAddress, 
  findLandordById
}


    //const property = res.data.property[0]
    // const ownerObj = property.assessment.owner.owner1
    // const addressObj = property.address
    // const firstName = ownerObj.firstNameAndMi
    // const lastName = ownerObj.lastName
    // const name = ownerObj.firstNameAndMi + " " + ownerObj.lastName

    // console.log( name, addressObj )