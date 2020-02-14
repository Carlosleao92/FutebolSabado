import React from 'react'
import './Spinner.css'

export default function Spinner() {
    return (
        <div className="full-height">
            <div className="full-height d-flex justify-content-center align-items-center loader">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}
