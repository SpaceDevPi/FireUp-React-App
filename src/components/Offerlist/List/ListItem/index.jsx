import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Customchip';

const ListItem = ({
  item: { image, title, price, type, state, rating ,coachfullname,_id,category},
}) => (
  <div className='listItem-wrap'>
    
    <img  src={`http://localhost:5000/uploads/`+image}  alt='' />
    
    <footer>

    <h3>{coachfullname} </h3>
    <Chip label={category} />
    </footer>

    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
 {state==="Booked" ?
        <b class="redhere">{state}</b> :
        <b class="greenhere">{state}</b> 
        }
        
        
        
        <span> For {type}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
    {/* {state!=="Booked" &&  */}
    <Link className='blogItem-link' to={`/offer/${_id}`}>
          ➝
        </Link>
        {/* } */}
  </div>
);

export default ListItem;
