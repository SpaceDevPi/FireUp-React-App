import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import './style.css';
import React, { useState } from 'react';
import { enableRipple } from '@syncfusion/ej2-base';

function TimeCalender(props) {
    enableRipple(true);

    const [time, setv] =useState("null");
    const [minTime, setlm] =useState("8/3/2017 7:00");
    const [maxTime, setmax] =useState("8/3/2017 16:00");
    function padTo2Digits(num) {
        return String(num).padStart(2, '0');
      }
    function onclick(value){
        console.log(value)
        console.log(value.value.getHours()+':'+padTo2Digits(value.value.getMinutes()))
        setv(value.value)
    }
    if (time!=="null")
    props.passtimedata(time.getHours()+':'+padTo2Digits(time.getMinutes()))

    return (
<>
<TimePickerComponent  step={60} format={'HH:mm'}  change={onclick} id="timepicker" min={"8/3/2017" +' ' +props.passtime1} max={"8/3/2017" +' ' +props.passtime2} />

</>
    )


}




export default TimeCalender
