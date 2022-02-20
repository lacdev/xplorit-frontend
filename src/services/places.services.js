import axios from "axios";
import { endpoints } from "endpoints/endpoints";

export async function getCardsPlacesHome() {
  const getAllPlacesPromise = await axios.get(endpoints.getAllPlaces);
  const cardsDataPlaces = getAllPlacesPromise.data.data.places;
  return cardsDataPlaces;
}

export async function getSinglePlaceData({ queryKey }) {
  const service_url = `${endpoints.getAllPlaces}/${queryKey[1]}`;
  const getSinglePlaceDataPromise = await axios.get(service_url);
  const singlePlaceData = getSinglePlaceDataPromise.data.data;
  console.log("Lugar", getSinglePlaceDataPromise);
  return singlePlaceData;
}

export async function getOwnerPlace({ queryKey }) {
  const service_url = `${endpoints.getOwnerPlace}/${queryKey[1]}`;
  const getOwnerPlacePromise = await axios.get(service_url);
  const getOwnerPlaceData = getOwnerPlacePromise.data.data;
  return getOwnerPlaceData;
}

export async function getPlaceLikes({ queryKey }) {
  const service_url = `${endpoints.getAllPlaces}/${queryKey[1]}/likes`;
  const getOwnerPlacePromise = await axios.get(service_url);
  const getOwnerPlaceData = getOwnerPlacePromise.data;
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
  return await axios.post(service_url, formData);
  // return postNewPlace
}

export async function saveLikeOnPlace(userId, placeId) {
  console.log("saveLike ", placeId, userId);
  const service_url = `${endpoints.saveLike}/${placeId}/likes`;
  return await axios.post(service_url, {
    placeId: placeId,
    userId: userId,
  });
}

export async function deleteLikeOnPlace(userId, placeId) {
  const service_url = `${endpoints.getAllPlaces}/${placeId}/likes`;
  return await axios.delete(service_url, {
    userId: userId,
  });
}

export async function savePostonPlace(comment, stars, _id, placeId) {
  const service_url = `${endpoints.getReviews}/${placeId}/reviews`;
  return await axios.post(service_url, {
    comment: comment,
    stars: stars,
    userId: _id,
    placeId: placeId,
  });
}
