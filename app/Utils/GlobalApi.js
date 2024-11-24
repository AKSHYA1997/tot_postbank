import { gql, request } from 'graphql-request'

const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/cm3okm0gp01bu08w3yt6mjv15/master"

const getSlider=async()=> {
    const query = gql`
    query GetSlider {
    sliders {
        id
        name
        image {
        url
        }
    }
    }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const getCategory=async()=> {
    const query = gql`
    query GetCategory {
    categories {
        id
        name
        icon {
        url
        }
    }
    }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export default {
    getSlider,
    getCategory
}
