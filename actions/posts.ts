import sendApiReq from '@/utils/sendApiReq';
import endPoints from '@/utils/endPoints';

export type addPostDataType = { title: string, description: string }
export type editPostDataType = { title: string, description: string, id: string }
export type singlePostDataType = { id: string }

export function getAllPosts({ pageParam: skip = 0 }) {
  if (typeof skip === "boolean") return []
  return sendApiReq({
    url: endPoints.posts,
    params: { skip },
  })
}


export function getPostById(id: string) {
  return sendApiReq({
    url: endPoints.posts + `/${id}`,
  })
}

export function getSinglePosts(data: singlePostDataType) {
  return sendApiReq({
    url: endPoints.posts + "/user",
    data,
  })
}

export function addPost(data: addPostDataType) {
  return sendApiReq({
    method: "post",
    url: endPoints.posts,
    data,
  })
}

export function editPost(data: editPostDataType) {
  return sendApiReq({
    method: "put",
    url: endPoints.posts,
    data,
  })
}

export function deletePost(id: string) {
  return sendApiReq({
    method: "delete",
    url: endPoints.posts + `/${id}`,
  })
}