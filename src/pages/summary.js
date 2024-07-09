/* NOT MY WORK */

import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Reservation from '../components/Reservation';

function Summary() {

    const location = useLocation();
    const stateData = location.state;


    const printSelectedSeats = () => {
        const reservations = [];
        for (let index = 0; index < stateData?.seats.length; index++) {
          reservations.push(
            <Reservation
              key={index}
              movie={stateData?.movie.name}
              seats={stateData?.seats[index].row + stateData?.seats[index].seatNumber}
              time={stateData?.screening.time}
              price={stateData?.price}
              discount={stateData?.discount}
            ></Reservation>
          );
        }
        return reservations;
      };

    return (
        <>
        {printSelectedSeats()}
        <NavLink to='/my-reservations' className='link'>
                Show reservations
            </NavLink>
        <NavLink to='/payment-gateway' className='link'>
            Pay tickets
        </NavLink>
        </>
    )
    
}

export default Summary