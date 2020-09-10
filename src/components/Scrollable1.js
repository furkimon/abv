import React, { useState } from 'react'
import '../assets/styles/Scrollable.css'

const Scrollable = () => {   
    const [step, setStep] = useState(0);
    const [items, setItems] = useState(scrollableData)
    const cycle = ["0", "2rem", "4rem", "6rem", "8rem"];

    const showScrollableData = () => {
        return scrollableData.map((data, index) => {
            return (
                <ul key={index} className='slide__list'>
                    <div className='slide__container' style={data.styles} key={index}>
                        <span id={`spanID${index}`} className={`scrollable__span${index} ` + 'slide__item'} key={index}>
                            {data.content}
                        </span>
                    </div>
                </ul>
            )
        })
    }

    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            setItems(
                items.map((item, i) => {
                    console.log(item.styles)
                    console.log(item)
                    const xPos = i;
                    return {
                        ...item, content : 'acaba',
                        styles: {
                            transform: `translateX(${cycle[xPos]})`,
                            opacity: xPos === 0 || xPos === 4 ? 0 : 1,
                            filter: xPos === 1 || xPos === 3 ? 'grayscale(1)' : 'initial'
                        }
                    }

                })
            )
        } else {
            setItems(
                items.map((item, i) => {
                    console.log(item.styles)
                    const xPos = i % 5;
                    return {
                        ...item,
                        styles: {
                            color: 'yellow',
                            transform: `translateY(-${cycle[xPos]})`,
                            opacity: xPos === 0 || xPos === 4 ? 0 : 1,
                            filter: xPos === 1 || xPos === 3 ? 'grayscale(1)' : 'initial'
                        }
                    }
                })
            )
        }

    }

    return (
        <div className="scrollable" onWheel={handleWheel}>
            {showScrollableData()}
        </div>
    )
}

const scrollableData = [
    {
        content: 'Lorem ipsum dolor sitamet',
        styles: {
            transform: "translateY(0)",
            opacity: 0,
            filter: "grayscale(1)"
        }
    },
    {
        content: 'Lorem ipsum dolor sitamet',
        styles: {
            transform: "translateY(2rem)",
            opacity: 0.5,
            filter: "grayscale(1)"
        }
    },
    {
        content: 'Lorem ipsum dolor sitamet',
        styles: {

            transform: "translateY(4rem)",
            opacity: 1,
            filter: "none"
        }
    },
    {
        content: 'Lorem ipsum dolor sitamet',
        styles: {
            transform: "translateY(6rem)",
            opacity: 0.5,
            filter: "grayscale(1)"
        }
    },
    {
        content: 'Lorem ipsum dolor sitamet',
        styles: {
            transform: "translateY(8rem)",
            opacity: 0,
            filter: "grayscale(1)"
        }
    }
];

export default Scrollable
