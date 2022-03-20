import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// get user from local storage
const investor = JSON.parse(localStorage.getItem('investor'));

const initialState = {
    investor: investor ? investor : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};





// login in user investor
export const loginInvestor = createAsyncThunk('authInvestor/loginInvestor', async(investor, thunkAPI) => {
    try {
        return await authService.loginInvestor(investor);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})
    

export const logout = createAsyncThunk('authInvestor/logout', async() => {
    await authService.logout();
})

export const authSlice = createSlice({
    name: 'investor',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginInvestor.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginInvestor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(loginInvestor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })

    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;