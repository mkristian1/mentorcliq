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
        users: [] as IUsers[]
    },
    reducers: {
        addSuggest: (state, action: PayloadAction<number>) => {
            return { ...state, users: suggestStatus(state.users, action.payload, true) }
        },
        removeSuggest: (state, action: PayloadAction<number>) => {
            return { ...state, users: suggestStatus(state.users, action.payload, false) }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEmployess.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }

})

export const { addSuggest, removeSuggest } = usersSlice.actions

export default usersSlice.reducer;