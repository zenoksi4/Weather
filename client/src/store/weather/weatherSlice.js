import { createSlice } from '@reduxjs/toolkit';

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