import  axios from "axios";
import { endpoints } from 'endpoints/endpoints'

export async function  getAllPlaces() {
    const getAllPlacesPromise = await axios.get(endpoints.getAllPlaces)
    const cardsDataPlaces = getAllPlacesPromise.data.data.places
    console.log("cardsDataPlaces: ", cardsDataPlaces)
    return  cardsDataPlaces

} 