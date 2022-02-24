import axios from "axios";
import { endpoints } from "endpoints/endpoints";

const token = localStorage.getItem("token");

export async function getSingleUser() {
  const getUserPromise = await axios.get(endpoints.userMe, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const getUser = getUserPromise.data.data;
  return getUser;
}

export async function getCardsRoutesHome() {
  const getAllRoutesPromise = await axios.get(endpoints.getAllRoutes);
  const cardsDataRoutes = getAllRoutesPromise.data.data.routes;
  return cardsDataRoutes;
}

export async function getSharedRoutes() {
  const service_url = `${endpoints.getAllRoutes}/?sort=createdAt`;
  const getAllRoutesPromise = await axios.get(service_url);
  const cardsDataRoutes = getAllRoutesPromise.data.data.routes;
  return cardsDataRoutes;
}

export async function getTopRoutes() {
  const service_url = `${endpoints.getAllRoutes}/?sort=average`;
  const getAllRoutesPromise = await axios.get(service_url);
  const cardsDataRoutes = getAllRoutesPromise.data.data.routes;
  return cardsDataRoutes;
}

export async function getSingleRouteData({ queryKey }) {
  const service_url = `${endpoints.getAllRoutes}/${queryKey[1]}`;
  const getSinglePlaceDataPromise = await axios.get(service_url);
  const singlePlaceData = getSinglePlaceDataPromise.data.data;
  console.log("singleRoutedata ", singlePlaceData);

  return singlePlaceData;
}

export async function getOwnerRoute({ queryKey }) {
  const service_url = `${endpoints.getUserProfile}/${queryKey[1]}`;
  const getOwnerPlacePromise = await axios.get(service_url);
  const getOwnerPlaceData = getOwnerPlacePromise.data.data;
  return getOwnerPlaceData;
}

export async function getRouteLikes({ queryKey }) {
  const service_url = `${endpoints.getAllRoutes}/${queryKey[1]}/likes`;
  const getOwnerPlacePromise = await axios.get(service_url);
  const getOwnerPlaceData = getOwnerPlacePromise.data;
  return getOwnerPlaceData;
}

export async function createRoute(data, images) {
  const token = localStorage.getItem("token");
  const service_url = `${endpoints.postRoute}`;
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  for (let image of images) {
    formData.append("images", image);
  }
  console.log("Data desde el back", data);
  return await axios.post(service_url, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function saveReviewOnRoute(review, routeId) {
  console.log("routeId ", routeId);
  console.log("data ", review);
  const service_url = `${endpoints.postRoute}/${routeId}/reviews`;
  const saveLike = axios.post(
    service_url,
    {
      comment: review.comment,
      stars: review.stars,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return await saveLike;
}

export async function getAllFilterRoutes(url, page, limit) {
  const getFilterRoutes = await axios.get(`${url}${limit}&page=${page}`);
  const filterRoutes = getFilterRoutes.data;
  return filterRoutes;
}

export async function deleteLikeOnRoute(routeId) {
  const service_url = `${endpoints.postRoute}/${routeId}/likes`;
  // console.log("URL ", service_url);
  //console.log("JSON to POST ", data);
  return await axios.delete(
    service_url,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    {}
  );
}

export async function saveLikeOnRoute(routeId) {
  const service_url = `${endpoints.postRoute}/${routeId}/likes`;
  return await axios.post(
    service_url,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}
