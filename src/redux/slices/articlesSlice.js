import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";


let initialState = {
  articles: [],
  selectedArticle: {},
  errors: "",
};
const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    populateArticles(state, action) {
      state.articles = action.payload;
    },
    selectArticle(state, action) {
      state.selectedArticle = action.payload;
    },
    unselectArticle(state) {
      state.selectedArticle = null;
    },
    deleteArticle: (state, action) => {
      const payload = action.payload;
      const index = state.articles.findIndex((item) => item._id === payload);
      console.log("index" + index);
      if (index !== -1) {
        state.articles.splice(index, 1);
      }
    },
    updateArticle: (state, action) => {
      const payload = action.payload;
      const index = state.articles.findIndex(
        (item) => item._id === payload._id
      );
      if (index !== -1) {
        state.articles[index] = payload;
      }
    },
    addArticle: (state, action) => {
      const payload = action.payload;
      state.articles.push(payload);
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});
export const fetchArticles = () => async (dispatch) => {
  const [res, error] = await queryApi("articles");
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateArticles(res));
  }
};

export const fetchArticlesbyid = (id) => async (dispatch) => {
  const [res, error] = await queryApi("articles/findallbyid/"+id);
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateArticles(res));
  }
};
export const selectArticles = (state) => {
  return [state.articles.articles, state.articles.errors];
};
export const selectSelectedArticle = (state) => {
  return state.articles.selectedArticle;
};
export const {
  populateArticles,
  selectArticle,
  unselectselectArticle,
  setErrors,
  deleteArticle,
  updateArticle,
  addArticle,
} = articlesSlice.actions;
export default articlesSlice.reducer;
