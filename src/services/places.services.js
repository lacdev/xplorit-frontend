import  axios from "axios";
import { endpoints } from 'endpoints/endpoints'

export async function  getCardsPlacesHome() {
    const getAllPlacesPromise = await axios.get(endpoints.getAllPlaces)
    const cardsDataPlaces = getAllPlacesPromise.data.data.places
    return  cardsDataPlaces
} 

export async function getSinglePlaceData({queryKey}) {    
    const service_url = `${endpoints.getAllPlaces}/${queryKey[1]}`
    const getSinglePlaceDataPromise = await axios.get(service_url)
    const singlePlaceData = getSinglePlaceDataPromise.data.data
    return singlePlaceData
}

export async function getOwnerPlace({queryKey}) {
    const service_url = `${endpoints.getOwnerPlace}/${queryKey[1]}`
    const getOwnerPlacePromise = await axios.get(service_url)
    const getOwnerPlaceData = getOwnerPlacePromise.data
    return getOwnerPlaceData
}

export async function getPlaceLikes({queryKey}) {
    const service_url = `${endpoints.getAllPlaces}/${queryKey[1]}/likes`
    const getOwnerPlacePromise = await axios.get(service_url)
    const getOwnerPlaceData = getOwnerPlacePromise.data
    return getOwnerPlaceData
}