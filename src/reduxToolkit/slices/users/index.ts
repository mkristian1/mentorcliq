import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../../api/index";
import { IUsers } from "../../../types";

export const fetchEmployess = createAsyncThunk('employess/fetchEmployess',
    async () => {
        const data = await api.getEmployess()
        return data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action: PayloadAction<IUsers>) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEmployess.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }

})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer;