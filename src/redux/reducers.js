import { combineReducers } from "redux";
import projects from "./slices/projectsSlice";
const reducers = combineReducers({
  projects,
});
export default reducers;
