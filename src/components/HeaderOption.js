import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

export default function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);
    const userInitial = user ? user.displayName[0] : avatar

    return (
        <div className='headerOption' onClick={onClick}>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && (
                <Avatar className="headerOption__icon">{user && userInitial}</Avatar>
            )}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    )
}
