import  axios from "axios";
import { endpoints } from 'endpoints/endpoints'

export async function  getCardsRoutesHome() {
    const getAllRoutesPromise = await axios.get(endpoints.getAllRoutes)
    const cardsDataRoutes = getAllRoutesPromise.data.data.routes
    console.log("cardsDataRoutes: ", cardsDataRoutes)
    return  cardsDataRoutes
} 

export async function getTopRoutes() {
    const getTopRoutesPromise = await axios.get(endpoints.getTopRoutes)
    const cardsTopRoutes = getTopRoutesPromise.data.data.routes
    return cardsTopRoutes
}

export async function getNearRoutes() {
    const getNearRoutesPromise = await axios.get(endpoints.getNearRoutes)
    const cardsNearRoutes = getNearRoutesPromise.data.data.routes
    return cardsNearRoutes
}

export async function getSharedRoutes() {
    const getSharedRoutesPromise = await axios.get(endpoints.getSharedRoutes)
    const cardsSharedRoutes = getSharedRoutesPromise.data.data.routes
    return cardsSharedRoutes
}