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
            transform: "translateY(5rem)",
            opacity: 0.5,
            filter: "none"
        }
    },
    {
        content: '33Dolor Lorem ipsum sitamet',
        styles: {
            transform: "translateY(10rem)",
            opacity: 1,
            filter: "none"
        }
    },
    {
        content: '44sitamet Lorem ipsum dolor',
        styles: {
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

let i = 0;
const Scrollable = () => {
    const [items, setItems] = useState(scrollableData)
    const [step, setStep] = useState(0);
    const cycle = ["0", "5rem", "10rem", "15rem", "20rem"];

    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            // i === scrollableData.length - 1 ? i = 0 : i++
            setStep((prev) => (prev + 1 + items.length) % 5);
            setItems(
                items.map((item, i) => {
                    const xPos = (i + step + 1) % 5;
                    return {
                        ...item,
                        styles: {
                            transform: `translateY(${cycle[xPos]})`,
                            opacity: xPos === 0 || xPos === items.length - 1 ? 0 : xPos === 2 ? 1 : 0.5,
                            filter: xPos === 1 || xPos === items.length - 2 ? 'grayscale(1)' : 'initial',
                            ['border-top'] : xPos === 2 ? '1px dashed white' : null,
                            ['border-bottom'] : xPos === 2 ? '1px dashed white' : null,
                            ['font-size'] : xPos === 1 || xPos === 3 ? '4vh' : xPos === 0 || xPos === items.length - 1 ? '3vh' : '5vh'

                        }
                    };
                })
            );

        } else {
            // i === 0 ? i = scrollableData.length - 1 : i--
            setStep((prev) => (prev - 1 + items.length) % 5);
            setItems(
                items.map((item, i) => {
                    const xPos = (i + step + items.length - 1) % 5;
                    return {
                        ...item,
                        styles: {
                            transform: `translateY(${cycle[xPos]})`,
                            opacity: xPos === 0 || xPos === items.length - 1 ? 0 : xPos === 2 ? 1 : 0.5,
                            filter: xPos === 1 || xPos === items.length - 2 ? 'grayscale(1)' : 'initial'
                        }
                    };
                })
            );

        }
        console.log(items)

    }

    const showScrollableData = () => {
        console.log("screen :")
        console.log(items)
        return items.map((data, index) => {
            console.log("screen : " + data.styles.transform)
            return (
                    <span id={`spanID${index}`} className={`scrollable__span${index}` + " allspans"} key={index} style={data.styles}>
                        {data.content}
                    </span>
            )
        })
    }

    return (
        <div className="scrollable" onWheel={handleWheel}>
            {showScrollableData()}
        </div>
    )
}

export default Scrollable
