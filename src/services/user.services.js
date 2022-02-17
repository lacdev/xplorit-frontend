import axios from "axios";
import { endpoints } from "endpoints/endpoints";

export async function getUserProfilePic({ queryKey }) {
  const service_url = `${endpoints.getUserProfile}/${queryKey[1]}`;
  const getUserPromise = await axios.get(service_url);
  const getUser = getUserPromise.data.data;
  return getUser;
}

export async function getPlacesCreatedByUser({ queryKey }) {
  const service_url = `${endpoints.getUserProfile}/${queryKey[1]}/places`;
  const getPlacesPromise = await axios.get(service_url);
  const getPlaces = getPlacesPromise.data.data;
  return getPlaces;
}

export async function getRoutesCreatedByUser({ queryKey }) {
  const service_url = `${endpoints.getUserProfile}/${queryKey[1]}/routes`;
  const getRoutesPromise = await axios.get(service_url);
  const getRoutes = getRoutesPromise.data.data;
  return getRoutes;
}

export async function getCommentsCreatedByUser({ queryKey }) {
  console.log(
    "🚀 ~ file: user.services.js ~ line 26 ~ getCommentsCreatedByUser ~ queryKey",
    queryKey
  );
  const service_url = `${endpoints.getLikesFromUser}/${queryKey[1]}/reviews`;
  console.log(
    "🚀 ~ file: user.services.js ~ line 29 ~ getCommentsCreatedByUser ~ service_url ",
    service_url
  );
  const getCommentsPromise = await axios.get(service_url);
  console.log(
    "🚀 ~ file: user.services.js ~ line 30 ~ getCommentsCreatedByUser ~ getCommentsPromise",
    getCommentsPromise
  );
  const getComments = getCommentsPromise.data.data.routes;
  console.log(
    "🚀 ~ file: user.services.js ~ line 32 ~ getCommentsCreatedByUser ~ getComments",
    getComments
  );
  return getComments;
}

export async function getLikesCreatedByUser({ queryKey }) {
  console.log("querykey", queryKey);
  const service_url = `${endpoints.getLikesFromUser}/${queryKey[1]}/likes`;
  const getLikesPromise = await axios.get(service_url);
  const getLikes = getLikesPromise.data.data;
  return getLikes;
}

export async function userLogin(userEmail, userPassword) {
  // const service_url = `${base_url}/login`
  const getLoginPromise = await axios.post(endpoints.logIn, {
    email: userEmail,
    password: userPassword,
  });
  console.log("Aqui es login promise", getLoginPromise);
  return getLoginPromise.data;
}

export async function userSignUp(userName, userEmail, userPassword) {
  const getSignUpPromise = await axios.post(endpoints.signUp, {
    username: userName,
    email: userEmail,
    password: userPassword,
  });
  console.log(`Aqui es login promise ${getSignUpPromise}`);
  return getSignUpPromise.data;
}
