

const base_url = `${process.env.REACT_APP_SERVER_URL}/v1`


export const endpoints = {

    getSinglePlace : `${base_url}/places/6201dc77326d2c5c74344e77`,

    getAllPlaces : `${base_url}/places/`,

    getTopPlaces : `${base_url}/places/`,

    getNearPlaces : `${base_url}/places/`,

    getRecentlySharedPlaces : `${base_url}/places/`,

    getAllRoutes :  `${base_url}/routes/`,

    getTopRoutes :  `${base_url}/routes/`,

    getNearRoutes : `${base_url}/routes/`,

    getSharedRoutes : `${base_url}/routes/`,
}
