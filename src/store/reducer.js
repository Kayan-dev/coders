import { combineReducers } from "redux";
import postFeedReducer from "./feed/reducer";
import { postPageSliceReducer } from "./postPage/reducer";
// import someFeatureReducer from "./someFeature/reducer";

const rootReducer = combineReducers({
  feed: postFeedReducer,
  postPage: postPageSliceReducer,
});

export default rootReducer;
