import React,{useState,useEffect} from 'react';
import Chip from '../../../common/Chip';
import './styles.css';
import Stars from '../../../Stars';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const BlogItem = ({
  blog: {
    idoffer,
    createdAt,
    coachfullname,
    image,
    numroom,
    timeoffer,
    dateoffer,
    offertitle,

  },
}) => {
  const [rating, setRating] = useState(5) // initial rating value
  const [testf,settestf] = useState(false)
  const [expired,setexpired] = useState(false)
  const [formData2, setFormData2] = useState({
    idoffer:"",
    star:0,
  });
  const test = async () => {
     window.location.href='/meet'
    
  }
  
  useEffect(() => {
    console.log(dateoffer)
    if ((parseInt(dateoffer.slice(0,4))===(new Date().getFullYear()))&&((parseInt(dateoffer.split('-')[1])-1)===(parseInt(new Date().getMonth())))&&((parseInt(dateoffer.split('-')[2]))===(new Date().getDate())&&(parseInt(timeoffer.split(':')[0]))===new Date().getHours())){
    // if (dateoffer.slice(0,4)===new Date().getFullYear())  {
    settestf(true)
    }
    if ((parseInt(dateoffer.slice(0,4))===(new Date().getFullYear()))&&((parseInt(dateoffer.split('-')[1])-1)===(parseInt(new Date().getMonth())))&&((parseInt(dateoffer.split('-')[2]))===(new Date().getDate())&&(parseInt(timeoffer.split(':')[0]))<new Date().getHours())){
setexpired(true)
    }
    if ((parseInt(dateoffer.slice(0,4))===(new Date().getFullYear()))&&((parseInt(dateoffer.split('-')[1])-1)===(parseInt(new Date().getMonth())))&&((parseInt(dateoffer.split('-')[2]))<(new Date().getDate()))){
      setexpired(true)
          }
          if ((parseInt(dateoffer.slice(0,4))===(new Date().getFullYear()))&&((parseInt(dateoffer.split('-')[1])-1)<(parseInt(new Date().getMonth())))){
            setexpired(true)
                }
                if ((parseInt(dateoffer.slice(0,4))<(new Date().getFullYear()))){
                  setexpired(true)
                      }
    }, []);
// console.log((parseInt(dateoffer.slice(0,4))===(new Date().getFullYear()))&&((parseInt(dateoffer.split('-')[1])-1)===(parseInt(new Date().getMonth())))&&((parseInt(dateoffer.split('-')[2]))===(new Date().getDate())))
console.log(rating)
  console.log(timeoffer.split(':')[0])
  console.log(new Date().getFullYear())
   console.log(testf)
  function submitstar(){

  }
  return (
    <div className='blogItem-wrap'>
          {expired ? <div class="corner-ribbon2 top-left sticky red shadow">Finished</div> :''}
      <img className='blogItem-cover3' src={`http://localhost:5000/uploads/`+image} alt='cover' />
      <Chip label={coachfullname} />
      <h2>ROOM NUMBER : {numroom}</h2>
      <h3>{dateoffer}</h3>
      <h4 >{timeoffer}</h4>
      <footer>
        <div className='blogItem-author'>
          <div>
            <h5 className='h5test'>Offer title : {offertitle}</h5>
            <p>Booked at :{new Date(Date.parse(createdAt)).toLocaleDateString('EN-EN', options)}</p>
          </div>
        </div>
        {expired ?  <div>
            <h2 className="wew"> please rate this coach</h2>
          <Stars setrating={setRating}/>
           <button className="button-22" role="button" onClick={submitstar}>Rate now!</button> 
         


          </div> :''}

      
{testf ?  <button className="button-33" role="button"  onClick={test}>Participate</button> :'' }
       

{/* <button className="button-33" role="button"  onClick={test}>Participate</button> */}
         
        {/* <Link className='blogItem-link' to={`/blog/${_id}`}>
          ➝
        </Link> */}
      </footer>
    </div>
  );
};

export default BlogItem;
