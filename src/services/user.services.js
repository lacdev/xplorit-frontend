import  axios from "axios";
import { endpoints } from 'endpoints/endpoints'

export async function getUserProfilePic() {
    const getUser = await axios.get(endpoints.getUserData)
    console.log("getUser:", getUser)

}