import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './style.css';
import React, { useState } from 'react';

function Calendar(props) {
   console.log("aaaa")
    const [dateValue, setv] =useState("null");
    const [minDate, setlm] =useState("05/09/2017");
    const [maxDate, setmax] =useState("05/15/2017");
    console.log(props)
    function onclick(value){
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
    return (
<>
 <CalendarComponent change={onclick}  min={props.passChildData} max={props.passChildData2} />

</>
    )


}




export default Calendar;
