import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//project imports
import axiosApi from 'utils/axiosApi';
// import store from 'store';
import { Profile } from 'types';
import { RootState } from 'store';

interface UserSliceState {
    loggedUser: Profile | null;
    loading: boolean;
    isLogged: boolean;
    currentRequestId: string | undefined;
    error: any;
}

const initialState: UserSliceState = {
    loggedUser: null,
    isLogged: false,
    loading: false,
    currentRequestId: undefined,
    error: null
};

type LoginPayload = {
    email: string;
    password: string;
};

export const login = createAsyncThunk(
    'account/login',
    async (payload: LoginPayload) => {
        const { data } = await axiosApi.post(`/api/account/login`, payload);
        localStorage.setItem('serviceToken', data.user.id);
        return data.user as Profile;
    }
);

export const loginByToken = createAsyncThunk(
    'account/login-token',
    async (token: string) => {
        const { data } = await axiosApi.post(`/api/account/login-token`, {
            token
        });
        return data.user as Profile;
    }
);

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            console.log("dispatch");
            window.localStorage.setItem('serviceToken', null!);
            return initialState;
        },
        register: (state) => {

            return initialState;
        }
        // addTodo: (state, action: PayloadAction<string>) => {
        //     state.data = [
        //         ...state.data,
        //         {
        //             id: '2',
        //             title: 'testowy',
        //             author: 'empty',
        //             description: 'opis',
        //             imageUrl: ''
        //         }
        //     ];
        // },
        // removeTodo: (state, action: PayloadAction<number>) => {
        //     // state.data = state.data.filter(({ id }) => id !== action.payload);
        // }
    },

    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            if (!state.loading) {
                state.loading = true;
                state.error = null;
                state.currentRequestId = action.meta.requestId;
            }
        });
        builder.addCase(login.fulfilled, (state, action) => {
            const { requestId } = action.meta;
            if (state.loading && state.currentRequestId === requestId) {
                state.loading = false;
                state.loggedUser = action.payload as Profile;
                state.isLogged = true;
                state.currentRequestId = undefined;
            }
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.currentRequestId = undefined;
        });

        builder.addCase(loginByToken.pending, (state, action) => {
            if (!state.loading) {
                state.loading = true;
                state.error = null;
                state.currentRequestId = action.meta.requestId;
            }
        });
        builder.addCase(loginByToken.fulfilled, (state, action) => {
            const { requestId } = action.meta;
            if (state.loading && state.currentRequestId === requestId) {
                state.loading = false;
                state.loggedUser = action.payload as Profile;
                state.isLogged = true;
                state.currentRequestId = undefined;
            }
        });
        builder.addCase(loginByToken.rejected, (state, action) => {
            state.loading = false;
            state.isLogged = false;
            state.loggedUser = null;
            state.error = action.error;
            state.currentRequestId = undefined;
        });
    }
});

export const selectAccount = (state: RootState) => state.user;

export const { logout,register } = slice.actions;

export default slice.reducer;
