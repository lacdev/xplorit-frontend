import axios from "axios";
import { endpoints } from "endpoints/endpoints";

const token = localStorage.getItem("token");

export async function getCardsPlacesHome() {
  const getAllPlacesPromise = await axios.get(endpoints.getAllPlaces);
  const cardsDataPlaces = getAllPlacesPromise.data.data.places;
  return cardsDataPlaces;
}

export async function getSinglePlaceData({ queryKey }) {
  console.log("singleplace: ", queryKey);
  const service_url = `${endpoints.getAllPlaces}/${queryKey[1]}`;
  const getSinglePlaceDataPromise = await axios.get(service_url);
  const singlePlaceData = getSinglePlaceDataPromise.data.data;
  console.log("Lugar", getSinglePlaceDataPromise);

  return singlePlaceData;
}

export async function getOwnerPlace({ queryKey }) {
  const service_url = `${endpoints.getOwnerPlace}/${queryKey[1]}`;
  const getOwnerPlacePromise = await axios.get(service_url);
  console.log(getOwnerPlacePromise);
  const getOwnerPlaceData = getOwnerPlacePromise.data.data;
  return getOwnerPlaceData;
}


export async function getAllFilterPlaces(url) {
     const getFilterPlaces = await axios.get(url)
     console.log('is url there?', url)
    const filterPlaces = getFilterPlaces.data
    return filterPlaces
}



export async function getPlaceLikes({ queryKey }) {
  const service_url = `${endpoints.getAllPlaces}/${queryKey[1]}/likes`;
  const getOwnerPlacePromise = await axios.get(service_url);
  const getOwnerPlaceData = getOwnerPlacePromise.data;
  return getOwnerPlaceData;
}

export async function createPlace(data, images) {
  console.log("Habemos token", token);
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
  // return postNewPlace
}
