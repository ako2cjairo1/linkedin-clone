import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

export default function Widget() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("YOUR JOB ALERT", "Jairo Dave, 2 new jobs for software engineer in Central Luzon, Philippines")}
            {newsArticle("You appeared in 4 searches this week", "")}
            {newsArticle("Joan Anipan viewed you profile", "See all views")}
        </div>
    )
}
