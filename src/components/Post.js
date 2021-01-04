import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbsUpAltOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import CommentIcon from '@material-ui/icons/CommentOutlined'
import ShareIcon from '@material-ui/icons/ShareOutlined'
import SendIcon from '@material-ui/icons/SendOutlined'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbsUpAltOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={CommentIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareIcon} title='Share' color='gray' />
                <InputOption Icon={SendIcon} title='Send' color='gray' />
            </div>
        </div>
    )
})

export default Post;