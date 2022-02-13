import  axios from "axios";
import { endpoints } from 'endpoints/endpoints'

export async function getUserProfilePic({queryKey}) {
    const service_url = `${endpoints.getUserProfile}/${queryKey[1]}`
    const getUserPromise = await axios.get(service_url)
    const getUser = getUserPromise.data.foundUser[0]
    return getUser
}

export async function getPlacesCreatedByUser({queryKey}) {
    
    const service_url = `${endpoints.getUserProfile}/${queryKey[1]}/places`
    const getPlacesPromise = await axios.get(service_url)
    const getPlaces = getPlacesPromise.data.data
    return getPlaces
}

export async function getRoutesCreatedByUser({queryKey}) {
    
    const service_url = `${endpoints.getUserProfile}/${queryKey[1]}/routes`
    const getRoutesPromise = await axios.get(service_url)
    const getRoutes = getRoutesPromise.data.data
    console.log("getRoutes: ", getRoutes)
    return getRoutes
}

export async function getCommentsCreatedByUser({queryKey}) {
    console.log("queryKey: ", queryKey)
    const service_url = `${endpoints.getAllComments}/${queryKey[1]}/reviews`
    const getCommentsPromise = await axios.get(service_url)
    const getComments = getCommentsPromise.data.data.routes
    return getComments
}