import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "../features/SearchSlice/searchSlice";
import { favoriteSlice } from "../features/FavoriteSlice/favoriteSlice";

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        favorite: favoriteSlice.reducer
    }
});

