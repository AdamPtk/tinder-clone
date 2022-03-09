import React from 'react';
import './Header.css';
import tinderLogo from './assets/tinder-logo.png';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header_icon' />
      </IconButton>
      <img
        src={tinderLogo}
        alt="tinder-logo"
        className='header_logo'
      />
      <IconButton>
        <ForumIcon fontSize='large' className='header_icon' />
      </IconButton>
    </div>
  )
}

export default Header