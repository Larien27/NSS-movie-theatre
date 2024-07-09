import './ScreeningTime.css'
import { NavLink } from 'react-router-dom'


function ScreeningTime({date, time, movie, screening}) {


    return (
        <div className="screening-time">
            <p>{date} {time}</p>
            <NavLink to='/seats' 
                    state={{ movie: movie, screening: screening}}
                    className='link'>
                Buy
            </NavLink>
        </div>
    );
}

export default ScreeningTime