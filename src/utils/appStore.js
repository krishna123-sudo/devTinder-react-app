import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// import Feed from "../components/Feed";
import feedReducer from "./FeedSlice"
import connectionsReducer from "./connectionSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connections: connectionsReducer
    }
})


export default appStore;