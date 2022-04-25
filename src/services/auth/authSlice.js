import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// get user from local storage
const entrepreneur = JSON.parse(localStorage.getItem('entrepreneur'));
const investor = JSON.parse(localStorage.getItem('investor'));

const initialState = {
    entrepreneur: entrepreneur ? entrepreneur : null,
    investor : investor ? investor : null , 
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    newMessages: 0,
};

// register entrepreneur
export const register = createAsyncThunk('auth/register', async(entrepreneur, thunkAPI) => {
    try {
        return await authService.register(entrepreneur);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// login in entrepreneur
export const login = createAsyncThunk('auth/login', async(entrepreneur, thunkAPI) => {
    try {
        return await authService.login(entrepreneur);
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
        },
        addNotifications: (state, { payload }) => {
            if (state.newMessages[payload]) {
                state.newMessages[payload] += 1;
            }else {
                state.newMessages[payload] = 1;
            }
        },
        resetNotifications: (state, { payload }) => {
            delete state.newMessages[payload];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.entrepreneur = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.entrepreneur = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.entrepreneur = null;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.entrepreneur = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.entrepreneur = null;
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

export const { reset, addNotifications, resetNotifications } = authSlice.actions;
export default authSlice.reducer;