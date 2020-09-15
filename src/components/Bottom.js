import React, { useState, useEffect } from 'react'
import '../assets/styles/Bottom.css'
import { useStateValue } from '../reducer/StateProvider'


const Bottom = () => {
    const [pageNumber, setPageNumber] = useState('0');
    const [{ whichPage }, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({ type: 'WHICH_PAGE', payload: pageNumber })
    }, [pageNumber, dispatch])

    const pages = [
        { name: "page1", value: "0" },
        { name: "page2", value: "I" },
        { name: "page3", value: "II" },
        { name: "page4", value: "III" }
    ];

    const highlightPageNumber = () => {
        switch (whichPage) {
            case 0:
                return 'page1';
            case 1:
                return 'page2'
            case 2:
                return 'page3'
            case 3:
                return 'page4'
            default:
                return 'page1'
        }
    }

    const showPageNumbers = () => {
        return pages.map((page, index) => {
            return (
                <div onMouseEnter={() => setPageNumber(index)} className={page.name + highlightPageNumber()} key={index}>
                    <h1 >{page.value}</h1>
                </div>
            )
        })
    }

    return (
        <div className="bottom">
            {showPageNumbers()}
        </div>
    )
}

export default Bottom
