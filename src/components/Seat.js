import './Seat.css'


const Seat = ({ seat, selected, onSeatClick }) => {
    const handleClick = () => {
      onSeatClick(seat.id);
    };
  
    const getState = () => {
        if (seat.occupied) return 'booked'
        else if (selected) return 'selected'
        else return ''
    };

    return (
        <div
            key={seat?.id}
            onClick={handleClick}
            className={`seat ${getState()}`}
            >
        </div>
    );
};

export default Seat