import { useState } from 'react';


const BookingForm  = () => {
    const [data, setData] = useState({})

    const updateData = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name,e.target.value)
    }
    const submit = e => {
        e.preventDefault()
        console.log(data)
    }
    return(
        <>
        <form 
            className="Reservation-form"
            onSubmit={submit}
        >
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="date"
                onChange={updateData}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="time"
                onChange={updateData}
            >
                <option>Select Time</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                name= "guests"
                onChange={updateData}
            />
            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion"
                name="occasion"
                onChange={updateData}
                >
                <option>Special Ocassion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>None</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    </>

    )
}

export default BookingForm