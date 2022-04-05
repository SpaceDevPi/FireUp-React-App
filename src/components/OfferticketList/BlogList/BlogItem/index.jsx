import React from 'react';
import Chip from '../../../common/Chip';
import './styles.css';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const BlogItem = ({
  blog: {

    createdAt,
    coachfullname,
    image,
    numroom,
    starttime,
    endtime,
    datestart,
    dateend,
    state,

  },
}) => {
  return (
    <div className='blogItem-wrap'>

      <img className='blogItem-cover' src={`http://localhost:5000/uploads/`+image} alt='cover' />
      <Chip label={coachfullname} />
      <h2>ROOM NUMBER : {numroom}</h2>
      <h3>{datestart}-{dateend}</h3>
      <h4 className='blogItem-desc'>{starttime}-{endtime}</h4>
      <footer>
        <div className='blogItem-author'>
          <div>
            <h5>{state}</h5>
            <p>Booked at :{new Date(Date.parse(createdAt)).toLocaleDateString('EN-EN', options)}</p>
          </div>
        </div>
        {/* <Link className='blogItem-link' to={`/blog/${_id}`}>
          ➝
        </Link> */}
      </footer>
    </div>
  );
};

export default BlogItem;
