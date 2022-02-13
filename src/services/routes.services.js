import  axios from "axios";
import { endpoints } from 'endpoints/endpoints'

export async function  getCardsRoutesHome() {
    const getAllRoutesPromise = await axios.get(endpoints.getAllRoutes)
    const cardsDataRoutes = getAllRoutesPromise.data.data.routes
    return  cardsDataRoutes
} 

export async function getSingleRouteData({queryKey}) {    
    const service_url = `${endpoints.getAllRoutes}/${queryKey[1]}`
    const getSinglePlaceDataPromise = await axios.get(service_url)
    const singlePlaceData = getSinglePlaceDataPromise.data.data[0]
    console.log("singlePlacedata ",singlePlaceData)
    return singlePlaceData
}

export async function getOwnerRoute({queryKey}) {
    const service_url = `${endpoints.getUserProfile}/${queryKey[1]}`
    const getOwnerPlacePromise = await axios.get(service_url)
    const getOwnerPlaceData = getOwnerPlacePromise.data
    console.log("user: ", getOwnerPlaceData)
    return getOwnerPlaceData
}

export async function getRouteLikes({queryKey}) {
    const service_url = `${endpoints.getAllRoutes}/${queryKey[1]}/likes`
    const getOwnerPlacePromise = await axios.get(service_url)
    const getOwnerPlaceData = getOwnerPlacePromise.data
    return getOwnerPlaceData
}