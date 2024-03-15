import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "../features/SearchSlice/searchSlice";
export const store = configureStore({
    reducer: {
        search: searchSlice.reducer
    }
});

