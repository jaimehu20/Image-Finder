import { createAsyncThunk } from "@reduxjs/toolkit"


export const GetPhotosThunk = createAsyncThunk("search/GetPhotos", async () => {
    const request = await fetch("https://api.unsplash.com/photos/?client_id=cTnTTz4MgRbarFin-csXZF3FoxL1EfraRokLMeW8RqQ")
    const data = await request.json()
    return data
})
