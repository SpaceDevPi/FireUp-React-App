import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// import { blogList } from '../../config/data';
 import Chip from '../../components/common/Chip';
 import Stars from '../../components/Stars';
 import Calendar from '../../components/calendar';
 import TimeCalender from '../../components/timecalendar';

import EmptyView from '../../components/common/EmptyView';
import './styles.css';
import { Link } from 'react-router-dom';
import { selectOffers } from "../../redux/slices/offersSlice";
import { useDispatch, useSelector } from "react-redux";
import { queryApi } from "../../utils/queryApi";

const Offer = () => {
  const { id } = useParams();
  const [formErrors, setFormErrors] = useState({});

  const [offerlist] = useSelector(selectOffers);
const [article, setArticle] = useState(offerlist);
const [number,setNumber]= useState(0);
  const [searchItem, setSearchItem]= useState("false");
  const [searchItem2, setSearchItem2]= useState("false");
  const [Datee, setDate] = useState("");
  const [hour, setHour]= useState("");
  const validate = () => {
    if (!Datee) {
      errors.Datee = "Date is required!";
    }if (!hour) {
      errors.hour = "hour is required!";
    }
    return errors;
  };
    const errors = {};
  console.log(hour)
  console.log(Datee)
  const [formData, setFormData] = useState({
    idcoach:"",
        idoffer:"",
        idclient:"",
        numroom:0,
        coachfullname:"",
        image:"",
        dateoffer:"",
        timeoffer:"",
    
  });

  const [formData2, setFormData2] = useState({
    state:"Booked",
  });
  useEffect(() => {
    setFormData({  idcoach:article.idcoach,
      idoffer:id,
      idclient:"34",
      coachfullname:article.coachfullname,
      image:article.image,
      dateoffer:Datee,
      timeoffer:hour,
      numroom:Math.floor(Math.random() * 10000)});
   
  }, [article._id,Datee,hour]);

  console.log(formData)
  useEffect(() => {
    let article = offerlist.find((article) => article._id === (id));
    console.log(article)

    if (article) {
      setArticle(article);

    }
  }, []);
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit)
{
  const [res, err] = await  queryApi("offerticket/add", formData, "POST", false);
if (err) {
console.log(err)
} else {
setNumber(number+1)
console.log(res)
}
// window.location.href = '/'

const [, err2] = await  queryApi("offers/edit/"+formData.idoffer, formData2, "POST", false);
if (err2) {
  console.lo(err2)

} else {
  // window.location.href = '/'

}
}
  }, [formErrors])

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  console.log(new Date(Date.parse(article.createdAt)).toLocaleDateString('EN-EN', options))
const test = async() =>
{
  setFormErrors(validate());
  setIsSubmit(true);
}
const submitstar = async() =>
{const [, err] = await  queryApi("offerticket/add", formData, "POST", false);
if (err) {
console.log(err)
} else {
setNumber(number+1)
// history.push("/products");
console.log("yesddd")
}
// window.location.href = '/'
  console.log("yes")

const [, err2] = await  queryApi("offers/edit/"+formData.idoffer, formData2, "POST", false);
if (err2) {
console.log(err2)
} else {
  window.location.href = '/offerlist'

}
  console.log("yes")

console.log(number)

}
  // const test =formatter.format(Date.parse(article.createdAt))

  return (
    <>
      <Link className='blog-goBack' to='/offerlist'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {/* <div className="teststars" >
            <div>
            <h2 className="wew"> please rate this coach</h2>
          <Stars/>
          <button className="button-22" role="button" onClick={submitstar}>Rate now!</button>
         


          </div>
          </div> */}
      {article ? (
        <div className='blog-wrap'>
          <header>
            
            <p className='blog-date'>Published {new Date(Date.parse(article.createdAt)).toLocaleDateString('EN-EN', options)}</p>
            <h1>{article.title}</h1>
            <div className='blog-subCategory'>
            <Chip label={article.category} />
            <Chip label={article.type} />
            <Chip label={article.state} />
            </div>
            <br/>

<footer>
            <h1>Rated</h1>
            <span>🌟{article.rating}</span>
            </footer>
            {/* <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div> */}

            <h2>Offer available </h2>
            <h2>{article.datestart}- {article.dateend}</h2>
          </header>
          <img  src={`http://localhost:5000/uploads/`+article.image} alt='cover' />

          <h1 className="testcoachname">Coach : {article.coachfullname}</h1>

          <p className='blog-desc'>{article.description}</p>
          <button className="button-33" role="button" onClick={test}>Book now</button>
          <div class="calendartest">
            <div>
          {!searchItem &&           <Calendar passChildData={article.datestart}  passChildData2={article.dateend} passdatedata={setDate} /> }
          <button onClick={()=> setSearchItem(!searchItem) } className="banner_searchbutton" variant="outlined">{!searchItem ? "Hide" : "Search Available Date"}</button>
          <p class="yo">{formErrors.Datee}</p>

          {!searchItem2 &&           <TimeCalender passtime1={article.starttime} passtime2={article.endtime} passtimedata={setHour}/> }
          <button onClick={()=> setSearchItem2(!searchItem2) } className="banner_searchbutton" variant="outlined">{!searchItem2 ? "Hide" : "Search Available Time"}</button>
          <p class="yo">{formErrors.hour}</p>

          </div>
          </div>
          

<br/>

        </div>

      ) : (
        <EmptyView />
      )}
    </>
  );
};

export default Offer;
