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

export async function getCardsPlacesHome() {
  const getAllPlacesPromise = await axios.get(endpoints.getAllPlaces);
  const cardsDataPlaces = getAllPlacesPromise.data.data.places;
  return cardsDataPlaces;
}

export async function getSinglePlaceData({ queryKey }) {
  const service_url = `${endpoints.getAllPlaces}/${queryKey[1]}`;
  const getSinglePlaceDataPromise = await axios.get(service_url);
  const singlePlaceData = getSinglePlaceDataPromise.data.data;
  return singlePlaceData;
}

export async function getOwnerPlace({ queryKey }) {
  const service_url = `${endpoints.getOwnerPlace}/${queryKey[1]}`;
  const getOwnerPlacePromise = await axios.get(service_url);
  const getOwnerPlaceData = getOwnerPlacePromise.data.data;
  return getOwnerPlaceData;
}

export async function getAllFilterPlaces(url, initialSearch) {
  console.log(
    "🚀 ~ file: places.services.js ~ line 29 ~ getAllFilterPlaces ~ initialSearch",
    initialSearch
  );
  const getFilterPlaces = await axios.get(url);
  const filterPlaces = getFilterPlaces.data;
  return filterPlaces;
}

export async function getPlaceLikes({ queryKey }) {
  const service_url = `${endpoints.saveLike}/${queryKey[1]}/likes`;
  const getOwnerPlacePromise = await axios.get(service_url);
  const getOwnerPlaceData = getOwnerPlacePromise.data.data;
  return getOwnerPlaceData;
}

export async function getSingleReview({ queryKey }) {
  const service_url = `${endpoints.getReviews}/${queryKey[1]}/reviews`;
  const getReviewsPromise = await axios.get(service_url);
  const getReviews = getReviewsPromise.data.data.reviews;
  return getReviews;
}

export async function getSingleReviewRoute({ queryKey }) {
  const service_url = `${endpoints.getReviewsRoute}/${queryKey[1]}/reviews`;
  const getReviewsPromise = await axios.get(service_url);
  const getReviews = getReviewsPromise.data.data.reviews;
  return getReviews;
}

export async function createPlace(data, images) {
  const service_url = `${endpoints.postPlace}`;
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

export async function saveLikeOnPlace(placeId) {
  const service_url = `${endpoints.saveLike}/${placeId}/likes`;
  return await axios.post(
    service_url,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

export async function deleteLikeOnPlace(placeId) {
  const service_url = `${endpoints.deleteLike}/${placeId}/likes`;
  return await axios.delete(
    service_url,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    {}
  );
}

export async function saveReviewOnPlace(review, placeId) {
  console.log("placeId ", placeId);
  console.log("data ", review);
  const service_url = `${endpoints.getReviews}/${placeId}/reviews`;
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
  console.log("saveLike ", saveLike);
  return await saveLike;
}
