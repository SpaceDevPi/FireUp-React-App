import { combineReducers } from "redux";
import users from "./slices/usersSlice";
import articles from "./slices/articlesSlice";
import offers from "./slices/offersSlice";
import tickets from "./slices/ticketsSlice";

import authReducer from '../services/auth/authSlice';
const reducers = combineReducers({
  users,
  articles,
  offers,
  tickets,

  auth: authReducer,
});
export default reducers;
