import { createSlice } from "@reduxjs/toolkit";


export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favoritePictures: JSON.parse(localStorage.getItem("favoritePhotos")) || []
    },
    reducers: {
        addFavorite: (state, action) => {
            let exists = false
            state.favoritePictures && state.favoritePictures.map((element, index) => {
                if (element.url  === action.payload.url){
                    exists = true
                }
            })
            if (!exists) {
                state.favoritePictures = [...state.favoritePictures,action.payload]
                localStorage.setItem("favoritePhotos", JSON.stringify(state.favoritePictures))
            }
        },
        removeFavorite: (state, action) => {
           state.favoritePictures = state.favoritePictures.filter((photo) => photo.url !== action.payload)
           localStorage.setItem("favoritePhotos", JSON.stringify(state.favoritePictures))
        },
        editDescription: (state, action) => {
            state.favoritePictures.map((element, index) => {
                if (element.url === action.payload.imgData.url){
                   state.favoritePictures.splice(index, 1)
                   action.payload.imgData.description = action.payload.updatedInfo
                   state.favoritePictures = [...state.favoritePictures,action.payload.imgData]
                   localStorage.setItem("favoritePhotos", JSON.stringify([...state.favoritePictures]))
                }
            })
        }
    }
})

export const { addFavorite } = favoriteSlice.actions
export const { removeFavorite } = favoriteSlice.actions
export const { editDescription } = favoriteSlice.actions
