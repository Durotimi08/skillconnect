import sendApiReq from '@/utils/sendApiReq';
import endPoints from '@/utils/endPoints';

export type userData = { firstname: string, lastname: string, image: string, skills: string }

export function getUser() {
    return sendApiReq({
        url: endPoints.user,
    })
}

export function updateUser(data: userData) {
    return sendApiReq({
        method: "put",
        url: endPoints.user,
        data,
    })
}
  