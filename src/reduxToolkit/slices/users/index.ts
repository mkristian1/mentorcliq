import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../../api/index";
import { IUsers } from "../../../types";
import { suggestStatus } from "../../../utils";

export const fetchEmployess = createAsyncThunk('employess/fetchEmployess',
    async () => {
        const data = await api.getEmployess()
        return data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        currentUser: {},
    } as { users: IUsers[], currentUser: any },
    reducers: {
        addSuggest: (state, action: PayloadAction<number>) => {
            return { ...state, users: suggestStatus(state.users, action.payload, true) }
        },
        removeSuggest: (state, action: PayloadAction<number>) => {
            return { ...state, users: suggestStatus(state.users, action.payload, false) }
        },
        setCurrentUser: (state, action: PayloadAction<number>) => {
            return { ...state, currentUser: action.payload }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEmployess.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }

})

export const { addSuggest, removeSuggest, setCurrentUser } = usersSlice.actions

export default usersSlice.reducer;