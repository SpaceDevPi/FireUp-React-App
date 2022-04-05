import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import storage from "redux-persist/lib/storage"; //Storage Engine
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
 import authReducer from '../services/auth/authSlice';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
export default configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   persistedReducer,
  //           auth: authReducer,
  //           // investor: investorReducer
  //       },
  middleware: [thunk],
});
