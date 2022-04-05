import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";


let initialState = {
  offers: [],
  selectedOffer: {},
  errors: "",
};
const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    populateOffers(state, action) {
      state.offers = action.payload;
    },
    selectOffer(state, action) {
      state.selectedOffer = action.payload;
    },
    unselectOffer(state) {
      state.selectedOffer = null;
    },
    deleteOffer: (state, action) => {
      const payload = action.payload;
      const index = state.offers.findIndex((item) => item._id === payload);
      console.log("index" + index);
      if (index !== -1) {
        state.offers.splice(index, 1);
      }
    },
   
    addOffer: (state, action) => {
      const payload = action.payload;
      state.offers.push(payload);
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});
export const fetchOffers = () => async (dispatch) => {
  const [res, error] = await queryApi("offers");
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateOffers(res));
  }
};

export const fetchOffersbyid = (id) => async (dispatch) => {
  const [res, error] = await queryApi("offers/findallbyid/"+id);
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateOffers(res));
  }
};
export const selectOffers = (state) => {
  console.log("yaaa+"+state.offers.offers)
  return [state.offers.offers, state.offers.errors];
};
export const selectSelectedOffer = (state) => {
  return state.offers.selectedOffer;
};
export const {
  populateOffers,
  selectOffer,
  unselectselectOffer,
  setErrors,
  deleteOffer,
  addOffer,
} = offersSlice.actions;
export default offersSlice.reducer;
