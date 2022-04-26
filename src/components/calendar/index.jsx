import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './style.css';
import React, { useState } from 'react';

function Calendar(props) {
   console.log("aaaa")
  //  console.log(props.datestodis)
   console.log(props)

    const [dateValue, setv] =useState("null");
    const [minDate, setlm] =useState("21/04/2017");
    const [maxDate, setmax] =useState("05/15/2017");
    const [testd, settestd] =useState(new Date());
    console.log(testd)
    console.log(props)
    function onclick(value){
      value.value.isDisabled=true;
        console.log(value.value)
        setv(value.value)
    }
    function setdate(childData){
        let  year = childData.getFullYear();
        let month = childData.getMonth()+1;
        let dt = childData.getDate();
        
        if (dt < 10) {
          dt = '0' + dt;
        }
        if (month < 10) {
          month = '0' + month;
        }
        let test1=year+'-' + month + '-'+dt
        return test1
      }
       if (dateValue!=="null"){
 props.passdatedata(setdate(dateValue))
console.log(setdate(dateValue))
    }

    function disabledDate(args) {
      if (((args.date).getDay() === 0 || (args.date).getDay() === 6) &&(!props.weekend)) {
          // set 'true' to disable the weekends
          args.isDisabled = true;
      }
            if (((args.date.getFullYear())===(new Date().getFullYear()))&&((args.date.getMonth())<=(new Date().getMonth()))&&((args.date.getDate())<(new Date().getDate()))){

      //  if ((args.date).isBefore(new Date())) {
          // set 'true' to disable the weekends
          args.isDisabled = true;
      }
      // if (((args.date.getFullYear())===(testd.getFullYear()))&&((args.date.getMonth())===(testd.getMonth()))&&((args.date.getDate())===(testd.getDate())))
      // {
      //   console.log("worked")
      //   args.isDisabled = true;
      // }
      let string = setdate(args.date)
      // console.log(string)

      props.datestodis.forEach(element => {console.log(element)
        if (string===element){
                 args.isDisabled = true;
        }
        // setHourlist2(hourlist2=>[...hourlist2,element+":00"]);
      });

      // if (string===props.datestodis[0])
      // {
      //   console.log("worked")
      //   args.isDisabled = true;
      // }
      // console.log(args.date)
      // console.log(testd)

  }
    return (
<>
 <CalendarComponent change={onclick}  min={props.passChildData} max={props.passChildData2} renderDayCell={disabledDate} />

</>
    )


}




export default Calendar;
