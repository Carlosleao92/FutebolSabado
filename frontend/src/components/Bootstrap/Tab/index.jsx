import React from 'react'

export default function Tab(props) {
    
    const { onClick, value, label, selectedValue } = props;

    let className = 'nav-link';

    if (selectedValue == value) {
        className += ' active';
    }

    return (
        <li className="nav-item" >
            <button
                className={className}
                onClick={onClick}
                value={value}>
                {label}
            </button>
        </li>
    )
}
