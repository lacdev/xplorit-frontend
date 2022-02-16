import  axios from "axios";
import { endpoints } from 'endpoints/endpoints';

export async function getAllStates({queryKey}) {
    const getAllStatesPromise = await axios.get(endpoints.getAllStates)
    const selectDataPlaces = getAllStatesPromise.data.data;
    
    return  selectDataPlaces
}
