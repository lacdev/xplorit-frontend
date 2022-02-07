import  axios from "axios";
import { endpoints } from 'endpoints/endpoints'

export async function  getAllPlaces() {
    //const getAllPlacesPromise = await axios.get(endpoints.getAllPlaces)
    //return  getAllPlacesPromise.data

    const getAllPlacesPromise = await fetch(endpoints.getAllPlaces)
    return getAllPlacesPromise.json()
} 