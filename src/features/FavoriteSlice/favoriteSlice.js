import { createSlice } from "@reduxjs/toolkit";


export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favoritePictures: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favoritePictures = [...state.favoritePictures,action.payload]
            localStorage.setItem("favoritePhotos", JSON.stringify(state.favoritePictures))
        },
        removeFavorite: (state, action) => {
            state.favoritePictures = [state.favoritePictures, action.payload]
            localStorage.removeItem("favoritePhotos");
        }
    }
})

export const { addFavorite } = favoriteSlice.actions
export const { removeFavorite } = favoriteSlice.actions