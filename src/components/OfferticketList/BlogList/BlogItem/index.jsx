import React from 'react';
import Chip from '../../../common/Chip';
import './styles.css';
import Stars from '../../../Stars';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const BlogItem = ({
  blog: {

    createdAt,
    coachfullname,
    image,
    numroom,
    timeoffer,
    dateoffer,
    state,

  },
}) => {
  const test = async () => {
     window.location.href='/meet'
    
  }
  console.log("daaaa")
  function submitstar(){

  }
  return (
    <div className='blogItem-wrap'>

      <img className='blogItem-cover3' src={`http://localhost:5000/uploads/`+image} alt='cover' />
      <Chip label={coachfullname} />
      <h2>ROOM NUMBER : {numroom}</h2>
      <h3>{dateoffer}</h3>
      <h4 >{timeoffer}</h4>
      <footer>
        <div className='blogItem-author'>
          <div>
            <h5>{state}</h5>
            <p>Booked at :{new Date(Date.parse(createdAt)).toLocaleDateString('EN-EN', options)}</p>
          </div>
        </div>
        <div>
            <h2 className="wew"> please rate this coach</h2>
          <Stars/>
          {/* <button className="button-22" role="button" onClick={submitstar}>Rate now!</button> */}
         


          </div>
        <button className="button-33" role="button"  onClick={test}>Participate</button>


         
        {/* <Link className='blogItem-link' to={`/blog/${_id}`}>
          ➝
        </Link> */}
      </footer>
    </div>
  );
};

export default BlogItem;
