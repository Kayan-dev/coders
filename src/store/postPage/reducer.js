const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "START_LOADING": {
      return {
        loading: true,
        post: null,
        comments: [],
      };
    }
    case "FETCH_POST_FULLY": {
      return {
        // also why not?  ...state,
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }
    default: {
      return state;
    }
  }
}
