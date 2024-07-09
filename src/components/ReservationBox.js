import './ReservationBox.css'


function ReservationBox({ movieTitle, dateAndTime, seat, ticketType, paymentState }) {
    return (
        <div className='reservations'>
            <div className="reservation-box">
                <div>
                    <p>{ dateAndTime }</p>
                </div>
                <div>
                    <p>{ movieTitle }</p>
                </div>
                <div>
                    <p>{ seat }</p>
                </div>
                <div>
                    <p>{ ticketType }</p>
                </div>
                <div>
                    <p>{ paymentState }</p>
                </div>
            </div>
        </div>
    )
}

export default ReservationBox