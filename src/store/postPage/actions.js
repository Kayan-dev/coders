import axios from "axios";
import { API_URL } from "../../config";

export function startLoadingPost() {
  return {
    type: "START_LOADING",
  };
}

export function postFullyFetched(onePost) {
  return {
    type: "FETCH_POST_FULLY",
    payload: onePost,
  };
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    console.log("object", postResponse);
    console.log("objec22", commentsResponse);
    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
