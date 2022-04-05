import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Articlelist/BlogList';
import Header from '../../components/Articlelist/Header';
import SearchBar from '../../components/Articlelist/SearchBar';
// import { blogList } from '../../config/data';
import { selectArticles } from "../../redux/slices/articlesSlice";
import { useDispatch, useSelector } from "react-redux";

const Articles = () => {
  const [articlelist] = useSelector(selectArticles);


const [articles, setArticles] = useState(articlelist);
console.log(articles)


  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = articlelist;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.Category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setArticles(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setArticles(articlelist);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!articles.length ? <EmptyList /> : <BlogList blogs={articles} />}
    </div>
  );
};

export default Articles;
