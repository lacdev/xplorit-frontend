import  axios from "axios";
import { endpoints } from 'endpoints/endpoints'

export async function getUserProfilePic({queryKey}) {
    const service_url = `${endpoints.getUserProfile}/${queryKey[1]}`
    const getUserPromise = await axios.get(service_url)
    const getUser = getUserPromise.data.foundUser[0]
    return getUser
}