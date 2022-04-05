import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { blogList } from '../../config/data';
 import Chip from '../../components/common/Chip';
 import Stars from '../../components/Stars';

import EmptyView from '../../components/common/EmptyView';
import './styles.css';
import { Link } from 'react-router-dom';
import { selectOffers } from "../../redux/slices/offersSlice";
import { useDispatch, useSelector } from "react-redux";
import { queryApi } from "../../utils/queryApi";

const Offer = () => {
  const { id } = useParams();
  const [offerlist] = useSelector(selectOffers);
const [article, setArticle] = useState(offerlist);
const [number,setNumber]= useState(0);
  const [blog, setBlog] = useState(null);
  const [formData, setFormData] = useState({
    idcoach:"",
        idoffer:"",
        idclient:"",
        numroom:0,
        coachfullname:"",
        image:"",
        starttime:"",
        endtime:"",
        datestart:"",
        dateend:"",
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
      starttime:article.starttime,
      endtime:article.endtime,
      datestart:article.datestart,
      dateend:article.dateend,
      numroom:Math.floor(Math.random() * 10000)});
   
  }, [article._id]);

  console.log(formData)
  useEffect(() => {
    let article = offerlist.find((article) => article._id === (id));
    console.log(article)

    if (article) {
      setArticle(article);

    }
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  console.log(new Date(Date.parse(article.createdAt)).toLocaleDateString('EN-EN', options))
const test = async() =>
{const [res, err] = await  queryApi("offerticket/add", formData, "POST", false);
if (err) {
console.log(err)
} else {
setNumber(number+1)
// history.push("/products");
console.log("yesddd")
console.log(res)

}
// window.location.href = '/'
  console.log("yes")

const [, err2] = await  queryApi("offers/edit/"+formData.idoffer, formData2, "POST", false);
if (err2) {
console.log(err2)
} else {
  // window.location.href = '/'

}
  console.log("yes")

console.log(number)

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
          <img  src={`http://localhost:3008/uploads/`+article.image} alt='cover' />

          <h1 className="testcoachname">Coach : {article.coachfullname}</h1>

          <p className='blog-desc'>{article.description}</p>
          <button className="button-33" role="button" onClick={test}>Book now</button>

          <div className="teststars" >
            <div>
            <h2 className="wew"> please rate this coach</h2>
          <Stars/>
          <button className="button-22" role="button" onClick={submitstar}>Rate now!</button>

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
