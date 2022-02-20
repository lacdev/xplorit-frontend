const base_url = `${process.env.REACT_APP_SERVER_URL}/v1`

export const endpoints = {
  getplacesUser: `${base_url}/places/`,

  //Use this service to sort on search pages and home pages.
  getFilteredPlaces: `${base_url}/places`,
  // Example of sorting for home page
  //v1/places?sort=average

  //To be deprecated not going to be used in the future, use FilterPlaces instead.
  getAllPlaces: `${base_url}/places/`,

  getAllRoutes: `${base_url}/routes`,

  getOwnerPlace: `${base_url}/users`,

  getPlacesLikes: `${base_url}/places/`,

  getUserProfile: `${base_url}/users`,

  postPlace: `${base_url}/places/`,

  postRoute: `${base_url}/routes`,

  getLikesFromUser: `${base_url}/users`,

  getAllStates: `${base_url}/states`,

  logIn: `${base_url}/login`,

  signUp: `${base_url}/users`,
}
