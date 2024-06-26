import CallMock from "./IsMocked";
import CallApi from "./callApi";

const callOnApi = false

const callOnData = callOnApi === true ? CallApi : CallMock;
export default callOnData;

console.log(callOnData)

/**
 * @param {string} kind 
 * @param {number} userId 
 * @returns Array of data
 */

export const AllData = async (kind, userId) => {
    let data = []

    switch (kind) {
        case "UserInfos":
            data = await callOnData.getInfos(userId);
            break;
        case "UserActivity":
            data = await callOnData.getActivity(userId);
            break;
        case "UserSessions":
            data = await callOnData.getSessions(userId);
            break;
        case "UserPerformance":
            data = await callOnData.getPerformance(userId);
            break;
        default:
            console.log("données non disponibles");
    }
    return data;
}

