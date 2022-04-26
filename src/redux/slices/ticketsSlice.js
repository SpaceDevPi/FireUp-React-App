import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";


let initialState = {
  tickets: [],
  selectedticket: {},
  errors: "",
};
const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    populatetickets(state, action) {
      state.tickets = action.payload;
    },
    selectticket(state, action) {
      state.selectedticket = action.payload;
    },
    unselectticket(state) {
      state.selectedticket = null;
    },
    deleteticket: (state, action) => {
      const payload = action.payload;
      const index = state.tickets.findIndex((item) => item._id === payload);
      console.log("index" + index);
      if (index !== -1) {
        state.tickets.splice(index, 1);
      }
    },
   
    addticket: (state, action) => {
      const payload = action.payload;
      state.tickets.push(payload);
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const fetchtickets = () => async (dispatch) => {
  const [res, error] = await queryApi("offerticket");
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populatetickets(res));
  }
};

export const fetchticketsbyid = (id) => async (dispatch) => {
  const [res, error] = await queryApi("offerticket/findallbyid/"+id);
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populatetickets(res));
  }
};
export const fetchticketsbyidoffer = (id) => async (dispatch) => {
  const [res, error] = await queryApi("offerticket/findallbyidoffer/"+id);
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populatetickets(res));
  }
};
export const fetchticketsbyidcoach = (id) => async (dispatch) => {
  const [res, error] = await queryApi("offerticket/findallbyidforcoach/"+id);
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populatetickets(res));
  }
};
export const selecttickets = (state) => {
  console.log("yaaa+"+state.tickets.tickets)
  return [state.tickets.tickets, state.tickets.errors];
};
export const selectSelectedticket = (state) => {
  return state.tickets.selectedticket;
};
export const {
  populatetickets,
  selectticket,
  unselectselectticket,
  setErrors,
  deleteticket,
  addticket,
} = ticketsSlice.actions;
export default ticketsSlice.reducer;
