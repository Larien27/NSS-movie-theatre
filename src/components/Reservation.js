import './Reservation.css'


function Reservation({movie, seats, time, price, discount}) {

    return (
        <div className="cardWrap">
            <div className="carde cardLeft">
                <h1>MOVIEMASTERS</h1>
                <div className="title">
                    <h2>{movie}</h2>
                    <span>movie</span>
                </div>
                <div className="name">
                    <h2>Jirka Sebek</h2>
                    <span>name</span>
                </div>
                <div className="seate">
                    <h2>{seats}</h2>
                    <span>seat</span>
                </div>
                <div className="time">
                    <h2>{time}</h2>
                    <span>time</span>
                </div>
            </div>
            <div className="carde cardRight">
                <div className="eye"></div>
                <div className="number">
                    <h3>{seats}</h3>
                    <span>seat</span>
                </div>
                <div className="barcode"></div>
            </div>
        </div>
    );
}

export default Reservation