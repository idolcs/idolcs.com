import { configureStore } from "@reduxjs/toolkit";
import recentItemsReducer from "./features/recentItems/recentItems";
import announcementItemsReducer from "./features/announcement/announcement";
import recentChaptersReducer from "./features/recentChapters/recentChapters";

export const store = configureStore({
    reducer: {
        recentItems: recentItemsReducer,
        announcementItems: announcementItemsReducer,
        recentChapters: recentChaptersReducer,
    },
});