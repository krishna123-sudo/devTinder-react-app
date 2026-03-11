import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// import Feed from "../components/Feed";
import feedReducer from "./FeedSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer
    }
})


export default appStore;