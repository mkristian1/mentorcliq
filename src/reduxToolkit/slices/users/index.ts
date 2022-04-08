import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [
            { firstName: 'Kris', lastName: 'Mkrtchyan' },
        ]
    },
    reducers: {
        addUser: (state, action: PayloadAction<{ firstName: string, lastName: string }>) => {
            state.users.push(action.payload)
        }
    }
})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer;