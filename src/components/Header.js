import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import SupervisoryAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';

export default function Header() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className="header__left">
                <img 
                    src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
                    alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisoryAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption 
                    avatar='photo-shrink_100_100/0/1608114626421?e=1614816000&v=beta&t=mlEmmz8i-thn6xvGOCSkNSrJ5YVufYjD_ItYyMcUgDs'
                    onClick={handleLogout} 
                    title='Me'/>
            </div>
        </div>
    )
}
