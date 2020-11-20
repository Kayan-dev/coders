import axios from "axios";
import { API_URL } from "../../config";

export function startLoading() {
  return {
    type: "LOADING_PAGES",
  };
}

export function postsFetched(listOfPosts) {
  return {
    type: "FETCHED_PAGES",
    payload: listOfPosts,
  };
}

export async function fetchNext5Posts(dispatch, getState) {
  dispatch(startLoading());

  const offset = getState().feed.posts.length;

  const res = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);

  const morePosts = res.data.rows;
  console.log("Whatsthis", morePosts);
  console.log("AAndthis?", res.data);

  dispatch(postsFetched(morePosts));
}
