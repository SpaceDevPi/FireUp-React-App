import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";
let initialState = {
  users: [],
  selectedUser: {},
  errors: "",
};
const usersSlice = createSlice({
  name: "coach",
  initialState,
  reducers: {
    populateUsers(state, action) {
      state.users = action.payload;
    },
    selectUser(state, action) {
      state.selectUser = action.payload;
    },
    unselectUser(state) {
      state.selectedUser = null;
    },
    deleteUser: (state, action) => {
      const payload = action.payload;
      const index = state.users.findIndex((item) => item._id === payload);
      console.log("index" + index);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
    updateUser: (state, action) => {
      const payload = action.payload;
      const index = state.users.findIndex(
        (item) => item._id === payload._id
      );
      if (index !== -1) {
        state.users[index] = payload;
      }
    },
    addUser: (state, action) => {
      const payload = action.payload;
      state.users.push(payload);
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});
export const fetchUsers = () => async (dispatch) => {
  const [res, error] = await queryApi("coach");
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateUsers(res));
  }
};
export const selectUsers = (state) => {
  return [state.users.users, state.users.errors];
};
export const selectSelectedUser = (state) => {
  return state.users.selectUser;
};
export const {
  populateUsers,
  selectUser,
  unselectUser,
  setErrors,
  deleteUser,
  updateUser,
  addUser,
} = usersSlice.actions;
export default usersSlice.reducer;
