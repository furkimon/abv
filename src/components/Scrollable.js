import React, { useState } from 'react'
import '../assets/styles/Scrollable.css'

const scrollableData = [
    {
        content: '11Lorem ipsum dolor sitamet',
        styles: {
            transform: "translateY(0)",
            opacity: 0,
            filter: "none"
        }
    },
    {
        content: '22ipsum Lorem dolor sitamet',
        styles: {
            fontSize: "4vh",
            transform: "translateY(5rem)",
            opacity: 0.5,
            filter: "none"
        }
    },
    {
        content: '33Dolor Lorem ipsum sitamet',
        styles: {
            borderTop: '1px dashed white',
            borderBottom : '1px dashed white',
            transform: "translateY(10rem)",
            opacity: 1,
            filter: "none"
        }
    },
    {
        content: '44sitamet Lorem ipsum dolor',
        styles: {
            fontSize: "4vh",
            transform: "translateY(15rem)",
            opacity: 0.5,
            filter: "none"
        }
    },
    {
        content: '55falan ipsum dolor sitamet',
        styles: {
            transform: "translateY(20rem)",
            opacity: 0,
            filter: "none"
        }
    }
];

const Scrollable = () => {
    const [items, setItems] = useState(scrollableData)
    const [step, setStep] = useState(0);
    const cycle = ["0", "5rem", "10rem", "15rem", "20rem"]; //must change if items change

    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            setStep((prev) => (prev + 1 + items.length) % items.length);
            setItems(
                items.map((item, i) => {
                    const xPos = (i + step + 1) % items.length;
                    return {
                        ...item,
                        styles: {
                            transform: `translateY(${cycle[xPos]})`,
                            opacity: xPos === 0 || xPos === items.length - 1 ? 0 : xPos === 2 ? 1 : 0.5,
                            filter: xPos === 1 || xPos === items.length - 2 ? 'grayscale(1)' : 'initial',
                            borderTop : xPos === 2 ? '1px dashed white' : null,
                            borderBottom : xPos === 2 ? '1px dashed white' : null,
                            fontSize : xPos === 1 || xPos === 3 ? '4vh' : xPos === 0 || xPos === items.length - 1 ? '3vh' : '5vh'

                        }
                    };
                })
            );
        } else {
            setStep((prev) => (prev - 1 + items.length) % items.length);
            setItems(
                items.map((item, i) => {
                    const xPos = (i + step + items.length - 1) % items.length;
                    return {
                        ...item,
                        styles: {
                            transform: `translateY(${cycle[xPos]})`,
                            opacity: xPos === 0 || xPos === items.length - 1 ? 0 : xPos === 2 ? 1 : 0.5,
                            filter: xPos === 1 || xPos === items.length - 2 ? 'grayscale(1)' : 'initial',
                            borderTop : xPos === 2 ? '1px dashed white' : null,
                            borderBottom : xPos === 2 ? '1px dashed white' : null,
                            fontSize : xPos === 1 || xPos === 3 ? '4vh' : xPos === 0 || xPos === items.length - 1 ? '3vh' : '5vh'
                        }
                    };
                })
            );

        }
    }

    const showScrollableData = () => {
        return items.map((data, index) => {
            return <span id={`spanID${index}`} className={`scrollable__span${index}` + " allspans"} key={index} style={data.styles}>{data.content}</span>
        })
    }

    return <div className="scrollable" onWheel={handleWheel}>{showScrollableData()}</div>
}

export default Scrollable
