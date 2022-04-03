import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// get user from local storage
const user = JSON.parse(localStorage.getItem('user'));
const investor = JSON.parse(localStorage.getItem('investor'));

const initialState = {
    user: user ? user : null,
    investor : investor ? investor : null , 
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// register user
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
    try {
        return await authService.register(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// login in user
export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// login in user investor
export const loginInvestor = createAsyncThunk('authInvestor/loginInvestor', async(investor, thunkAPI) => {
    try {
        return await authService.loginInvestor(investor);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const logoutInvestor = createAsyncThunk('authInvestor/logoutInvestor', async() => {
    await authService.logoutInvestor();
})



export const logout = createAsyncThunk('auth/logout', async() => {
    await authService.logout();
})

export const authSlice = createSlice({
    name: 'auth',
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
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(loginInvestor.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginInvestor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.investor = action.payload;
            })
            .addCase(loginInvestor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.investor = null;
            })
            .addCase(logoutInvestor.fulfilled, (state) => {
                state.isLoading = false;
                state.investor = null;
            })
            
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;