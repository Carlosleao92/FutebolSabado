import React from 'react'
import Tab from '../Tab';

export default function Tabs(props) {

    const {labels, onClick, selectedTab} = props;

    let tabs = labels && labels.map((entry, index) => 
        <Tab 
            key={index}
            onClick={onClick}
            value={index}
            selectedValue={props.selectedTab}
            label={labels[index]}
            />
    )

    return (
        <ul className="nav nav-tabs nav-justified">
            {tabs}
        </ul>
    )
}
