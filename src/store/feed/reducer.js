const initialState = {
  loading: true,
  posts: [],
};

export default function postFeedReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING_POSTS": {
      return {
        ...state,
        loading: false,
      };
    }
    case "FETCHED_POSTS": {
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
