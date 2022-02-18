const base_url = `${process.env.REACT_APP_SERVER_URL}/v1`;

export const endpoints = {
  getplacesUser: `${base_url}/places/`,

  getAllPlaces: `${base_url}/places/`,

  getAllRoutes: `${base_url}/routes`,

  getOwnerPlace: `${base_url}/users`,

  getPlacesLikes: `${base_url}/places/`,

  getUserProfile: `${base_url}/users`,

  postPlace: `${base_url}/places/`,

  postRoute: `${base_url}/routes`,

  getLikesFromUser: `${base_url}/users`,

  getAllStates: `${base_url}/states`,

  getReviews: `${base_url}/places`,

  getReviewsRoute: `${base_url}/routes`,

  logIn: `${base_url}/login`,

  signUp: `${base_url}/users`,

  saveLike: `${base_url}/places`,
};
