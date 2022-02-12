
const base_url = `${process.env.REACT_APP_SERVER_URL}/v1`


export const endpoints = {


    getAllPlaces : `${base_url}/places/`,

    getAllRoutes :  `${base_url}/routes`,

    getOwnerPlace : `${base_url}/users`,

    getPlacesLikes: `${base_url}/places/`,

    getUserProfile : `${base_url}/users`,
}
