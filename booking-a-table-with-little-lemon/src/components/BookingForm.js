import React from "react";
import { useState } from "react"

const BookingForm =(props)=>{

    const[selectedDate, setSelectedDate] = useState('');
    const[time, setTime] = useState('');
    const[selectGuest, setSelectGuest] = useState('');
    const[selectOccasion, setSelectOccasion] = useState('');

    const handleSubmit=(e)=>{
e.preventDefault(e);
props.submitForm(e);
    }

    const handleDateChange =(event)=>{
        setSelectedDate(event)
        props.dispatch(event);
   }

    

    return (


        <header>
            <section>
                <form onSubmit={handleSubmit}>
                <div>
                <label>
                    Add Date
                </label>
                <input type="date" value={selectedDate} onChange={(event)=>handleDateChange(event.target.value)} required></input>
                </div>
                <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>

               <div>
               <label>Select guests</label>
               <input value={selectGuest} type="number" min={1} max={10} onChange={(e)=>setSelectGuest(e.target.value)}></input>
               </div>
               <div>
               <label>Select Occasion</label>
               <select value={selectOccasion} key={selectOccasion} onChange={(e)=>setSelectOccasion(e.target.value)}>
               <option value="">Select and option</option>
  <option>Bithday</option> 
  <option>Anniversary</option> 
  </select>  
  </div>

  <div>
    <input type="submit" value={"Make Your Reservation"}/>
    </div>    
    </form>     
            </section>
        </header>
    )


}

export default BookingForm;