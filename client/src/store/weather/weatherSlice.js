import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import weatherService from '../services/weatherService';

export const getWeather = createAsyncThunk('GET_WEATHER', async (_, thunkAPI) => {
    try {
        return await weatherService.getRepos();

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})
const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: null,
        isError: false,
        isLoading: false,
        message: ''
    }
});

export default weatherSlice.reducer;