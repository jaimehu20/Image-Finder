
import { GetPhotosThunk } from "../../app/searchThunk"
import { createSlice } from "@reduxjs/toolkit"


export const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers: {
        search: (state, action) => {
            state.data = [...state.data, ...state.payload]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetPhotosThunk.pending, (state,action) => {
            state.status = "pending"
        }).addCase(GetPhotosThunk.rejected, (state,action) => {
            state.status = "rejected"
            state.error = action.payload.error
        }).addCase(GetPhotosThunk.fulfilled, (state,action) => {
            state.data = [...state.data,action.payload]
            state.status = "fulfilled"
        })
    }
})

export const {search} = searchSlice.actions

export const getPhoto = (state) => state.search.data
export const GetPhotoError = (state) => state.search.error
export const GetPhotoStatus = (state) => state.search.status