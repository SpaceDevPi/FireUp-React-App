import React,{useState,useEffect} from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Customchip';
import { queryApi } from "../../../../utils/queryApi";
var lodash = require('lodash');

const ListItem = ({
  item: { image, title, price, type, state, rating ,coachfullname,_id,category,dateend},
}) => {

  
  const [expired,setexpired] = useState(false)
  const [ratinglist,setratinglist] = useState([])
  const [formData2, setFormData2] = useState({
    rating:0,
  });
  useEffect(() => {
    if ((parseInt(dateend.slice(0,4))===(new Date().getFullYear()))&&((parseInt(dateend.split('-')[1])-1)===(parseInt(new Date().getMonth())))&&((parseInt(dateend.split('-')[2]))<(new Date().getDate()))){
      setexpired(true)
          }
          if ((parseInt(dateend.slice(0,4))===(new Date().getFullYear()))&&((parseInt(dateend.split('-')[1])-1)<(parseInt(new Date().getMonth())))){
            setexpired(true)
                }
  }, []);
  const [stars,setstars]= useState([])
  async function fetchData() {
    console.log("aaaaaaa")
    const [res, err] = await queryApi("stars/findstarsbyidoffer/" + _id);
    console.log(res)
    setstars(res);
  }

  useEffect( () => {
      fetchData()
         }, [_id]);


         useEffect( () => {
          setratinglist([]);
          stars.forEach(element => {console.log(element)
            setratinglist(ratinglist=>[...ratinglist,element.stars]);
          });
        }, [stars]);
console.log(ratinglist)
        var sum = lodash.sum(ratinglist);
console.log(parseInt(sum/stars.length));


console.log(!parseInt(sum/stars.length)); 

return (
  
  <div className='listItem-wrap'>
    {type==="Contractor" ?     <div class="corner-ribbon top-left sticky turquoise shadow">{type}</div>
: <div class="corner-ribbon top-left sticky blue shadow">{type}</div>}

    <img className="lool" src={`http://localhost:5000/uploads/`+image}  alt='' />

    <footer>

    <h3>{coachfullname} </h3>
    <Chip label={category} />
    </footer>

    <header>
      <h4>{title}</h4>
      {parseInt(sum/stars.length) ?       <span>🌟{parseInt(sum/stars.length)}</span>  :''
 }
    </header>
    <footer>
      <p>
        {expired?         <b class="redhere">Expiré</b> :
                <b class="greenhere">{state}</b> 
}


        <span> For {type}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
    {/* {state!=="Booked" &&  */}

    <Link className='blogItem-link'   to={`/offer/${_id}`} onClick={() => window.location.href=`/offer/${_id}`}>
          ➝
        </Link>
        {/* } */}
  </div>
);
}

export default ListItem;
