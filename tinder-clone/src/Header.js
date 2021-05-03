import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU" 
            alt = "Tinder logo" />

            <IconButton>
            <ForumIcon fontSize = "large" className = "header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
