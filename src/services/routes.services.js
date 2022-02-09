import  axios from "axios";
import { endpoints } from 'endpoints/endpoints'

export async function  getCardsRoutesHome() {
    const getAllRoutesPromise = await axios.get(endpoints.getAllRoutes)
    const cardsDataRoutes = getAllRoutesPromise.data.data.routes
    console.log("cardsDataRoutes: ", cardsDataRoutes)
    return  cardsDataRoutes
} 