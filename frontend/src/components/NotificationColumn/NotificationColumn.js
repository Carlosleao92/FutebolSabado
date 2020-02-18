import React from 'react'
import CardImageLeft from '../CardImageLeft/CardImageLeft'
import './NotificationColumn.css'
export default function NotificationColumn() {
    return (
        <div>
            <h2 className="notification-column-title">NEWSFEED</h2>           
            <CardImageLeft></CardImageLeft>
            <CardImageLeft></CardImageLeft>
            <CardImageLeft></CardImageLeft>     
        </div>
    )
}
