import React from "react"
import ReservationBox from "../components/ReservationBox"

function MyReservations() {
    return(
        <>
            <h1>My reservations!</h1>
            <ReservationBox movieTitle={"The Maze Runner"} dateAndTime={"XX.XX.XXXX"} paymentState={"Reserved"} ticketType={"Student"} seat={"B4"}></ReservationBox>
            <ReservationBox movieTitle={"Inception"} dateAndTime={"XX.XX.XXXX"} paymentState={"Payed"} ticketType={"Adult"} seat={"C9"}></ReservationBox>
        </>
    )
}

export default MyReservations