import React, { useState } from 'react'
import '../assets/styles/Scrollable.css'

const scrollableData = [
    {
        content: 'Can be found on this website',
        styles: {
            opacity: 0,
        }
    },
    {
        content: ' roam free! ',
        styles: {
            opacity: 0.5,
        }
    },
    {
        content: 'Hi, This website belongs to',
        styles: {
            borderTop: '1px dashed white',
            borderBottom: '1px dashed white',
            opacity: 1,
        }
    },
    {
        content: 'a Software Developer',
        styles: {
            opacity: 0.5,
        }
    },
    {
        content: 'Owned skills and done Projects',
        styles: {
            opacity: 0,
        }
    }
];

const Scrollable = () => {
    const [items, setItems] = useState(scrollableData)
    const [step, setStep] = useState(0);
    const cycle = ["0", "5rem", "10rem", "15rem", "20rem"]; //must change if items change
    const cycleSmall = ["0", "2.5rem", "5rem", "7.5rem", "10rem"]; //must change if items change

    const handleWheel = (e) => {
        
        if (e.deltaY < 0) {
            setStep((prev) => (prev + 1 + items.length) % items.length);
            setItems(
                items.map((item, i) => {
                    const xPos = (i + step + 1) % items.length;
                    if (window.matchMedia("(max-width : 768px)").matches) {
                        return {
                            ...item,
                            styles: {
                                transform: `translateY(${cycleSmall[xPos]})`,
                                opacity: xPos === 0 || xPos === items.length - 1 ? 0 : xPos === 2 ? 1 : 0.5,
                                filter: xPos === 1 || xPos === items.length - 2 ? 'grayscale(1)' : 'initial',
                                borderTop: xPos === 2 ? '1px dashed white' : null,
                                borderBottom: xPos === 2 ? '1px dashed white' : null,
                                fontSize: xPos === 1 || xPos === 3 ? '2vh' : xPos === 0 || xPos === items.length - 1 ? '1vh' : '3vh',
                                lineHeight: "5vh"
                            }
                        }
                    } else {
                        return {
                            ...item,
                            styles: {
                                transform: `translateY(${cycle[xPos]})`,
                                opacity: xPos === 0 || xPos === items.length - 1 ? 0 : xPos === 2 ? 1 : 0.5,
                                filter: xPos === 1 || xPos === items.length - 2 ? 'grayscale(1)' : 'initial',
                                borderTop: xPos === 2 ? '1px dashed white' : null,
                                borderBottom: xPos === 2 ? '1px dashed white' : null,
                                fontSize: xPos === 1 || xPos === 3 ? '4vh' : xPos === 0 || xPos === items.length - 1 ? '3vh' : '5vh',
                                lineHeight: "15vh"
                            }
                        };
                    }
                })
            );
        } else {
            setStep((prev) => (prev - 1 + items.length) % items.length);
            setItems(
                items.map((item, i) => {
                    const xPos = (i + step + items.length - 1) % items.length;
                    if (window.matchMedia("(max-width : 768px)").matches) {
                        return {
                            ...item,
                            styles: {
                                transform: `translateY(${cycleSmall[xPos]})`,
                                opacity: xPos === 0 || xPos === items.length - 1 ? 0 : xPos === 2 ? 1 : 0.5,
                                filter: xPos === 1 || xPos === items.length - 2 ? 'grayscale(1)' : 'initial',
                                borderTop: xPos === 2 ? '1px dashed white' : null,
                                borderBottom: xPos === 2 ? '1px dashed white' : null,
                                fontSize: xPos === 1 || xPos === 3 ? '2vh' : xPos === 0 || xPos === items.length - 1 ? '1vh' : '3vh',
                                lineHeight: "5vh"
                            }
                        }
                    } else {
                        return {
                            ...item,
                            styles: {
                                transform: `translateY(${cycle[xPos]})`,
                                opacity: xPos === 0 || xPos === items.length - 1 ? 0 : xPos === 2 ? 1 : 0.5,
                                filter: xPos === 1 || xPos === items.length - 2 ? 'grayscale(1)' : 'initial',
                                borderTop: xPos === 2 ? '1px dashed white' : null,
                                borderBottom: xPos === 2 ? '1px dashed white' : null,
                                fontSize: xPos === 1 || xPos === 3 ? '4vh' : xPos === 0 || xPos === items.length - 1 ? '3vh' : '5vh',
                                lineHeight : "15vh"
                            }
                        };
                    }
                })
            );

        }
    }

    const showScrollableData = () => {
        return items.map((data, index) => {
            return <span className={`allspans span${index}`} key={index} style={data.styles}>{data.content}</span>
        })
    }

    return <div className="scrollable" onWheel={handleWheel}>{showScrollableData()}</div>
}

export default Scrollable
