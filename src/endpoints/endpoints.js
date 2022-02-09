

const base_url = `${process.env.REACT_APP_SERVER_URL}/v1`
console.log(base_url)

export const endpoints = {

    getAllPlaces : `${base_url}/places/`,

    getTopPlaces : `${base_url}/places/`,

    getNearPlaces : `${base_url}/places/`,

    getRecentlySharedPlaces : `${base_url}/places/`,

    getAllRoutes :  `${base_url}/routes/`
}
