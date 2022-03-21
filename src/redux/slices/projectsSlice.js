import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";
let initialState = {
  projects: [],
  selectedProject: {},
  errors: "",
};
const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    populateProjects(state, action) {
      state.projects = action.payload;
    },
    selectProject(state, action) {
      state.selectedProject = action.payload;
    },
    unselectProject(state) {
      state.selectedProject = null;
    },
    deleteProject: (state, action) => {
      const payload = action.payload;
      const index = state.projects.findIndex((item) => item._id === payload);
      console.log("index" + index);
      if (index !== -1) {
        state.projects.splice(index, 1);
      }
    },
    updateProject: (state, action) => {
      const payload = action.payload;
      const index = state.projects.findIndex(
        (item) => item._id === payload._id
      );
      if (index !== -1) {
        state.projects[index] = payload;
      }
    },
    addProject: (state, action) => {
      const payload = action.payload;
      state.projects.push(payload);
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});
export const fetchProjects = () => async (dispatch) => {
  const [res, error] = await queryApi("project");
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateProjects(res));
  }
};
export const selectProjects = (state) => {
  return [state.projects.projects, state.projects.errors];
};
export const selectSelectedProject = (state) => {
  return state.projects.SelectedProject;
};
export const {
  populateProjects,
  selectProject,
  unselectProject,
  setErrors,
  deleteProject,
  updateProject,
  addProject,
} = projectsSlice.actions;
export default projectsSlice.reducer;
