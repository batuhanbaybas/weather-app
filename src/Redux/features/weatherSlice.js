import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {REACT_APP_API_KEY} from "../../Api/api";

export const fetchWeather = createAsyncThunk("fetch/weather", async ({city}) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&lang=tr&units=metric`);
    return response.data;
})


const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {},
        status: "idle",
        error: null
    },
    extraReducers: {
        [fetchWeather.pending]: (state, action) => {
            state.status = "pending";
        },
        [fetchWeather.fulfilled]: (state, action) => {
            state.status = "success";
            state.weather = action.payload;
        },
        [fetchWeather.rejected]: (state, action) => {
            state.status = "fail";
            state.error = action.payload;
        }
    }

})
export const selectWeather = state => state.weather.weather;
export const selectStatus = state => state.weather.status;
export const selectError = state => state.weather.error;
export default weatherSlice.reducer;