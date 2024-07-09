/* NOT MY WORK */

import React from 'react'
import { useState } from 'react'
import Seat from '../components/Seat'
import './css/seats.css'
import { useLocation, NavLink } from 'react-router-dom';


function Seats() {

    const location = useLocation();
    const stateData = location.state;

    const screening = stateData.screening;
    const [seats, setSeats] = useState(screening.seats.map((seat) => {return { ...seat , selected: false}}));


    const handleSeatClick = (ide) => {
        setSeats((prevSeats) =>
            prevSeats.map((seat) => {
                if (seat.id === ide && !seat.occupied) {
                    return { ...seat, selected: !seat.selected };
                }
                return seat;
            })
        );
    };

    const groupBy = (array, key) => {
        return Object.values(
          array.reduce((result, item) => {
            (result[item[key]] = result[item[key]] || []).push(item);
            return result;
          }, {})
        );
      };

    const renderSeats = () =>
        groupBy(seats, 'row').map(row => 
            <>
                <div className='row'>
                    {
                        row.map((seat, rowIndex) => 
                        <>
                            {rowIndex === 0 && <span className='rowIndex'>{seat.row}</span>}
                            <div className='seatField'>
                                <Seat key={seat.id} seat={seat} selected={seat.selected} onSeatClick={handleSeatClick}/>
                                {rowIndex+1}
                            </div>
                            {rowIndex === 9 && <span className='rowIndex'>{seat.row}</span>}
                        </>
                        )
                    }
                </div>
            </>
    );
    
    const filterSeatsData = (seats) => {
        const filteredSeats = [];
        
        for (const seat of seats) {
            if (!seat.occupied && seat.selected) {
              filteredSeats.push(seat);
            }
        }
        
        return filteredSeats;
    }

    const printSelectedSeats = (selectedSeats) => {
        return selectedSeats.map(seat => `${seat.row}${seat.seatNumber}`).join(", ")
    }

    const selectedSeats = filterSeatsData(seats);

    return (
        <>
        <h1>Reservation</h1>
        <div className="container">
            <div className="screen"></div>
            <div className="seats">
                {renderSeats()}
            </div>
            <span>
                {printSelectedSeats(selectedSeats)}
            </span>
            <NavLink to='/reservation-info' 
                state={{ movie: stateData.movie, screening: screening, seats: selectedSeats}}
                className='link'>
                Next
            </NavLink>
        </div>
        </>
    );
};

export default Seats