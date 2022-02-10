import  axios from "axios";
import { endpoints } from 'endpoints/endpoints'

export async function  getCardsPlacesHome() {
    const getAllPlacesPromise = await axios.get(endpoints.getAllPlaces)
    const cardsDataPlaces = getAllPlacesPromise.data.data.places
    console.log("cardsDataPlaces: ", cardsDataPlaces)
    return  cardsDataPlaces

} 

export async function getTopPlaces() {
    const getTopPlacesPromise = await axios.get(endpoints.getTopPlaces)
    const cardsTopPlaces = getTopPlacesPromise.data.data.places
    return cardsTopPlaces
}

export async function getNearPlaces() {
    const getNearPlacesPromise = await axios.get(endpoints.getNearPlaces)
    const cardsNearPlaces = getNearPlacesPromise.data.data.places
    return cardsNearPlaces
}

export async function getRecentlySharedPlaces() {
    const getRecentlySharedPlacesPromise = await axios.get(endpoints.getRecentlySharedPlaces)
    const cardsRecentlySharedPlaces = getRecentlySharedPlacesPromise.data.data.places
    return cardsRecentlySharedPlaces
}

export async function getSinglePlaceData({queryKey}) {
    console.log(queryKey)
    
    const service_url = `${endpoints.getAllPlaces}/${queryKey[1]}`
    const getSinglePlaceDataPromise = await axios.get(service_url)
    const singlePlaceData = getSinglePlaceDataPromise.data.data
    return singlePlaceData
}

export async function getOwnerPlace() {
    const getOwnerPlacePromise = await axios.get(endpoints.getOwnerPlace)
    console.log("getownerplacepromise: ",getOwnerPlacePromise)
    const getOwnerPlaceData = getOwnerPlacePromise.data
    return getOwnerPlaceData
}
