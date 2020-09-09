import React, { useState } from 'react'
import '../assets/styles/Scrollable.css'

let i = 0;
const Scrollable = () => {
    const [animateSpan, setAnimateSpan] = useState('animate0');

    const scrollableData = [
        { content: 'Lorem ipsum dolor sitamet' },
        { content: 'Lorem ipsum dolor sitamet' },
        { content: 'Lorem ipsum dolor sitamet' },
        { content: 'Lorem ipsum dolor sitamet' },
        { content: 'Lorem ipsum dolor sitamet' }
    ];

    const showScrollableData = () => {
        return scrollableData.map((data, index) => {
            return <span className={`scrollable__span${index}` + animateSpan} key={index}>{data.content}</span>
        })
    }

    const handleWheel = (e) => {
        if (e.deltaY > 0) 
            i === scrollableData.length - 1 ? i = 0 : i++ 
        else
            i === 0 ? i = scrollableData.length - 1 : i--

        setAnimateSpan(`animate${i}`)
    }

    return (
        <div className="scrollable" onWheel={handleWheel}>
            {showScrollableData()}
        </div>
    )
}

export default Scrollable
