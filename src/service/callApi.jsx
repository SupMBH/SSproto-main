import axios from "axios";

/**
 * create axios instantiation 
 */

const url = axios.create({
    baseURL: `http://localhost:3000`
})

/**
   * Class callApi to collect API data
   * @param {number} userId
   * @return {object} result
   */

export default class CallApi {
    static getInfos = async (userId) => { 
        try {
            const result = await url.get(`/user/${userId}`)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
  
  
    static getActivity = async (userId) => {
        try {
            const result = await url.get(`/user/${userId}/activity`)
            return result.data
        } catch (error) {
            console.log(error)
        }
    } 


    static getSessions = async (userId) => {
        try {
            const result = await url.get(`/user/${userId}/average-sessions`)
            return result.data
        } catch (error) {
            console.log(error)
        }
    } 


    static getPerformance = async (userId) => {
        try {
            const result = await url.get(`/user/${userId}/performance`)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
} 

