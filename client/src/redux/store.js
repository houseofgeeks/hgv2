import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./features/homeSlice";
import aboutSlice from "./features/aboutSlice";
import projectSlice from "./features/projectSlice";
import resourcesSlice from "./features/resourcesSlice";
import ratingsSlice from "./features/ratingsSlice";

const store = configureStore({
  reducer: {
    home: homeSlice,
    about: aboutSlice,
    project: projectSlice,
    resource: resourcesSlice,
    ratings: ratingsSlice
  },
});

export default store;
