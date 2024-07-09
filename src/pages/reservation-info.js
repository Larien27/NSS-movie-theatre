/* NOT MY WORK */

import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './css/reservation-info.css'


function ReservationInfo() {

    const location = useLocation();
    const stateData = location.state;

    const [type, setType] = useState('');

    const price = stateData?.seats.length;

    console.log(stateData);

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const printSelectedSeats = (selectedSeats) => {
        return selectedSeats.map(item => `${item.row}${item.seatNumber}`).join(", ")
    }


    return (
        <>
        <h1>Reservation info</h1>
        <div className="form">
            
            <h3>Selected seats:
                <span> {printSelectedSeats(stateData.seats)}</span>
            </h3>
            <h3>Total: <span>{price}</span></h3>
            <h3>Category:
                <select name="type" id="type" value={type} onChange={handleTypeChange}>
                    <option value="child">Child</option>
                    <option value="student">Student</option>
                    <option value="adult">Adult</option>
                    <option value="senior">Senior</option>
                </select>
            </h3>
            <NavLink to='/summary' 
                state={{ movie: stateData.movie, screening: stateData.screening, seats: stateData.seats, price: price, discount: type}}
                className='link'>
                Confirm
            </NavLink>
        </div>
        </>
    )
}

export default ReservationInfo;
