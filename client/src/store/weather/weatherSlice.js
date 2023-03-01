import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import weatherService from '../services/weatherService';

export const getWeather = createAsyncThunk('GET_WEATHER', async (location, thunkAPI) => {
    try {
        return await weatherService.getWeather(location);

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})
const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weatherCity: null,
        isError: false,
        isLoading: false,
        message: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getWeather.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(getWeather.fulfilled, (state, action) => {
            state.isLoading = false;
            state.weatherCity = action.payload
        });

        builder.addCase(getWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.weatherCity = null;
        });
    }
});

export default weatherSlice.reducer;