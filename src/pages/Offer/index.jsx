import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';

// import { blogList } from '../../config/data';
 import Chip from '../../components/common/Chip';
 import Stars from '../../components/Stars';
 import Calendar from '../../components/calendar';
//  import TimeCalender from '../../components/timecalendar';

import EmptyView from '../../components/common/EmptyView';
import './styles.css';
import { Link } from 'react-router-dom';
import { selectOffers } from "../../redux/slices/offersSlice";
import { selecttickets } from "../../redux/slices/ticketsSlice";

import {  useSelector } from "react-redux";
import { queryApi } from "../../utils/queryApi";
import range from 'lodash/range'
// import { date } from 'yup';
import { useDispatch } from "react-redux";
import { fetchticketsbyidoffer } from "../../redux/slices/ticketsSlice";

const Offer = () => {
  const { investor } = useSelector((state) => state.auth);
console.log(investor)
  const dispatch = useDispatch();
 

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchticketsbyidoffer(id));
  }, [dispatch,id]);
  const [formErrors, setFormErrors] = useState({});
  const [offerlist] = useSelector(selectOffers);
const [article, setArticle] = useState(offerlist);
const [ticketlist] = useSelector(selecttickets);
const [timelist, setTimelist] = useState([]);


const [ticket, setTicket] = useState(ticketlist);
console.log(ticket)

const [number,setNumber]= useState(0);
  const [searchItem, setSearchItem]= useState("false");
  const [searchItem2, setSearchItem2]= useState("false");
  const [Datee, setDate] = useState("");
  const [hour, setHour]= useState("");
  const [hourlist, setHourlist]= useState([]);
  const [hourlist2, setHourlist2]= useState([]);
  const [testhere, setTesthere]= useState(false);
  const [dates, setdates]= useState([]);
  const [datesocc, setdatesocc]= useState([]);
  const [datestosend, setdatestosend]= useState([]);

  let str = 'Hello';

  str = str.slice(1);
  console.log(str);

  // async function fetchData() {
  //   console.log("aaaaaaa")
    
  //   const [res, err] = await queryApi("offerticket");
   
  // }
  // useEffect( () => {
  //   fetchData()
    
  //      }, []);


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
        clientfullname:"",
        offertitle:"",
  });

  const [formData2, setFormData2] = useState({
    state:"Booked",
  });
  useEffect(() => {
    if (article!=offerlist){
      console.log("aa")
      console.log(parseInt(article.endtime.split(':')[0])+1)
      setHourlist(range(article.starttime.split(':')[0],parseInt(article.endtime.split(':')[0])+1)  )
    // setHourlist(['1','3']) 
    console.log("oh yes") 
    setTesthere(true)
      }
}, [article._id]);




useEffect(() => {
hourlist.forEach(element => {console.log(element)
  setHourlist2(hourlist2=>[...hourlist2,element+":00"]);
});
}, [testhere]);

  useEffect(() => {
    setFormData({  idcoach:article.idcoach,
      idoffer:id,
      idclient:investor._id,
      coachfullname:article.coachfullname,
      image:article.image,
      dateoffer:Datee,
      timeoffer:hour,
      clientfullname:investor.name,
      offertitle:article.title,
      numroom:Math.floor(Math.random() * 10000)});
     
  }, [article._id,Datee,hour]);
  
  console.log(hourlist)
  console.log(hourlist2)


  function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

// var result = arrayRemove(array, 6);
// result = [1, 2, 3, 4, 5, 7, 8, 9, 0]
  // console.log(article.starttime.slice(1,2))
  // console.log(article.endtime.slice(1,2))
 
  // var result = arrayRemove(range(article.starttime.slice(1,2),article.endtime.slice(1,2)), 4);
  const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// const toRemove = new Set(['b', 'c', 'g']);
const toRemove = new Set(timelist);

const difference = hourlist2.filter( x => !toRemove.has(x) );

console.log(difference); // ["a", "d", "e", "f"]
  // console.log(result)
  // console.log(formData)
  useEffect(() => {
    let article = offerlist.find((article) => article._id === (id));
    console.log(article)

    if (article) {
      setArticle(article);

    }
    ticketlist.forEach(element => {console.log(element)
      setdates(dates=>[...dates,element.dateoffer])
    });


  }, []);


  useEffect(() => {
    setTimelist([])
    let tickett = ticketlist.filter((ticket) => ticket.dateoffer === (Datee));

    if (tickett) {
      setTicket(tickett);
      tickett.forEach(element => {console.log(element)
        setTimelist(timelist=>[...timelist,element.timeoffer]);
      });
    }

    
  }, [Datee]);
  useEffect(() => {
console.log("yadhashuifaddddddddddddddddd")

      // dates.forEach((date) => {
      //   console.log(date);
      //   console.log(datesocc)
      //   if (datesocc[date]>0) {
      //     // { ...formData, [e.target.name]: e.target.value }
      //     setdatesocc(datesocc=>({...datesocc,[date]:9}))
      //   } else {
      //     setdatesocc(datesocc=>({...datesocc,[date]:2}))
      //   }
      // });
      let datesocc2=[]

            dates.forEach((date) => {
        console.log(date);
        console.log(datesocc2)
        if (datesocc2[date]>0) {
          // { ...formData, [e.target.name]: e.target.value }
         datesocc2[date]+=1;
        } else {
          datesocc2[date]=1;
        }
      });

     
      setdatesocc(datesocc2)
    console.log(datesocc2)


  }, [dates]);
  useEffect(() => {

  dates.forEach(element => {console.log(element)
    console.log(datesocc[element])

    if ((datesocc[element])>=hourlist.length){
    console.log("yaa") 
    setdatestosend(datestosend=>[...datestosend,element]);
  }
    // setdates(dates=>[...dates,element.dateoffer])
  });
}, [datesocc,hourlist]);
console.log(datestosend)
const filteredData = [...new Set(datestosend)];
console.log(filteredData);

console.log(dates)
console.log(datesocc)
console.log(hourlist.length)
var counts = {};
ticketlist.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
console.log(counts)
  const fn = () =>{
    console.log("worked")
    setSearchItem(!searchItem)
    // ticket.forEach(element => {console.log(element)
    //   setTimelist([element.timeoffer]);
    // });
  }
console.log(timelist)
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit)
{
  const [res, err] = await  queryApi("offerticket/add", formData, "POST", false);
if (err) {
console.log(err)
} else {

setNumber(number+1)
window.location.href = '/offerlist'

console.log(res)
}
// window.location.href = '/'
// const [, err2] = await  queryApi("offers/edit/"+formData.idoffer, formData2, "POST", false);
// if (err2) {
//   console.lo(err2)

// } else {
//    window.location.href = '/'

// }
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
const onChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
  // const test =formatter.format(Date.parse(article.createdAt))
  function ontest(value){
    console.log(value.value)
    setHour(value.value)
  }
  return (
    <>
      <Link className='button' to='/offerlist'>
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
            <Chip  label={article.category} />
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
          <img class="blogItem-cover2" src={`http://localhost:5000/uploads/`+article.image} alt='cover' />

          <h1 className="testcoachname">Coach : {article.coachfullname}</h1>

          <p className='blog-desc'>{article.description}</p>
          <button className="button-33" role="button" onClick={test}>Book now</button>
          <div class="calendartest">
            <div>
          {!searchItem &&           <Calendar datestodis={filteredData} weekend={article.weekend} passChildData={article.datestart}  passChildData2={article.dateend} passdatedata={setDate} /> }
          <button onClick={()=> fn()  } className="banner_searchbutton" variant="outlined">{!searchItem ? "Hide" : "Search Available Date"}</button>
          <p class="yo">{formErrors.Datee}</p>

          {/* {!searchItem2 &&           <TimeCalender passtime1={article.starttime} passtime2={article.endtime} passtimedata={setHour}/> }
          <button onClick={()=> setSearchItem2(!searchItem2) } className="banner_searchbutton" variant="outlined">{!searchItem2 ? "Hide" : "Search Available Time"}</button> */}
        
          <ComboBoxComponent  id="comboelement" dataSource={difference} onChange={ontest}  placeholder="Select time" />

          <p class="yo">{formErrors.hour}</p>

          </div>
          </div>
          

<br/>
{/* <div className="newUserItem">
<label>Category</label>

        <select  >
          
          <option value="">Choose Category</option>
          <option value="bronze">bronze</option>
          <option value="silver">silver</option>
          <option value="gold">gold</option>

        </select>

      </div> */}
        </div>

      ) : (
        <EmptyView />
      )}
    </>
  );
};

export default Offer;
