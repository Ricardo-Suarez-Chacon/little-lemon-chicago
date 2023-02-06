


const BookingForm  = (props) => {
   // console.log("props", props)

    const submit = e => {
        e.preventDefault()
      //  console.log(e)
    }
    return(
        <>
        <section className="Section-form">
            <form
                className="Reservation-form"
                onSubmit={submit}
            >
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    onChange={(e) =>{
                        props.dispatch( { "date": e.target.value } )
                            }
                        }
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    name="time"
                >
                    {props.availableTimes.map((time, index) => 
                        <option key={index}> {time}</option>
                    )}

                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    name= "guests"
                />
                <label htmlFor="occasion">Occasion</label>
                <select 
                    id="occasion"
                    name="occasion"
                    >
                    <option>Special Ocassion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>None</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </section>
    </>

    )
}

export default BookingForm