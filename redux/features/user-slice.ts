import { createSlice } from "@reduxjs/toolkit";

type userState = {
  id?: number;
  firstname?: string;
  lastname?: string;
  profileImage?: string;
  skills?: string[];
  loggedIn: boolean
}

const initialState: userState = {
  loggedIn: false
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state = action.payload;
    },
    removeUser: (state, action) => {
      state = {loggedIn: false};
    },
    updateUser: (state, action) => {
      state = {...state, [action.payload.name]: action.payload.value }
    },
  },
});

export const { addUser, removeUser, updateUser } = user.actions;
export default user.reducer;