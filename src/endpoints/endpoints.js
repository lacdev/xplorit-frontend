

const base_url = `${process.env.REACT_APP_SERVER_URL}/v1`


export const endpoints = {


    getAllPlaces : `${base_url}/places/`,

    getTopPlaces : `${base_url}/places/`,

    getNearPlaces : `${base_url}/places/`,

    getRecentlySharedPlaces : `${base_url}/places/`,

    getAllRoutes :  `${base_url}/routes/`,

    getTopRoutes :  `${base_url}/routes/`,

    getNearRoutes : `${base_url}/routes/`,

    getSharedRoutes : `${base_url}/routes/`,

    getOwnerPlace : `${base_url}/users/61edd1e827853c64e462aa06`,

    getUserData : `${base_url}/users/6200a26e64fdb24e699493d4`
}
