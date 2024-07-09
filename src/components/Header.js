import './Header.css'
import { NavLink } from 'react-router-dom'
import { IconButton } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import BookmarksIcon from '@mui/icons-material/Bookmarks'

function Header() {
    return (
        <div className='header'>
            <NavLink to='/'><img className='header__logo' src={require('../img/logo.png')} alt='MovieMasters'></img></NavLink>
            <nav>
                <NavLink className='header__link' to='/my-reservations'>
                    <IconButton className='header__link' id='header__signReservations'>
                        <BookmarksIcon fontSize='medium' className='header__icon'></BookmarksIcon>
                        My reservations
                    </IconButton>
                </NavLink>


                <NavLink to='/signin' className='header__navlink'>
                    <IconButton className='header__link' id='header__signIn'>
                        <PersonIcon fontSize='large' className='header__icon'></PersonIcon>
                        Sign In
                    </IconButton>
                </NavLink>
                
            
                <NavLink to='/registration' className='header__navlink'>
                    <IconButton className='header__link' id='header__register'>
                        <PersonAddIcon fontSize='large' className='header__icon'></PersonAddIcon>
                        Register
                    </IconButton>
                </NavLink>
            </nav>
        </div>
    )
}

export default Header