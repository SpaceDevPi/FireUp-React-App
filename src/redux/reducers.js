import { combineReducers } from "redux";
import users from "./slices/usersSlice";
import articles from "./slices/articlesSlice";
import offers from "./slices/offersSlice";
import authReducer from '../services/auth/authSlice';
const reducers = combineReducers({
  users,
  articles,
  offers,
  auth: authReducer,
});
export default reducers;
