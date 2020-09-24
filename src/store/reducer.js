import { combineReducers } from "redux";
import postFeedReducer from "./feed/reducer";
// import someFeatureReducer from "./someFeature/reducer";

const rootReducer = combineReducers({
  feed: postFeedReducer,
});

export default rootReducer;
