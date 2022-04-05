import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import { selectArticles } from "../../redux/slices/articlesSlice";
import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const { id } = useParams();
  const [articlelist] = useSelector(selectArticles);

const [article, setArticle] = useState(articlelist);

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let article = articlelist.find((article) => article._id === (id));
    console.log(article)

    if (article) {
      setArticle(article);
    }
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  

  console.log(new Date(Date.parse(article.createdAt)).toLocaleDateString('EN-EN', options))


  // const test =formatter.format(Date.parse(article.createdAt))

  return (
    <>
      <Link className='blog-goBack' to='/blog'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {article ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {new Date(Date.parse(article.createdAt)).toLocaleDateString('EN-EN', options)}</p>
            <h1>{article.Title}</h1>
            {/* <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div> */}
          </header>
          <img src={`http://localhost:5000/uploads/`+article.Image} alt='cover' />
          <p className='blog-desc'>{article.Description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
