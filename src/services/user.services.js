import  axios from "axios";
import { endpoints } from 'endpoints/endpoints'

export async function getUserProfilePic() {
    const getUser = await axios.get(endpoints.getUserData)
    const user = getUser.data.foundUser[0]
    console.log("getUser:", getUser)
    console.log("user:", user)
    return user
}