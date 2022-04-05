import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const BlogItem = ({
  blog: {
    Description,
    Title,
    createdAt,
    coachfullname,
    coachimage,
    Image,
    Category,
    _id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={`http://localhost:5000/uploads/`+Image} alt='cover' />
      <Chip label={Category} />
      <h3>{Title}</h3>
      <p className='blogItem-desc'>{Description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={`http://localhost:5000/uploads/`+coachimage} alt='avatar' />
          <div>
            <h6>{coachfullname}</h6>
            <p>{new Date(Date.parse(createdAt)).toLocaleDateString('EN-EN', options)}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${_id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
