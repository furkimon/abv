import React, { useState, useEffect } from 'react'
import '../assets/styles/Bottom.css'
import { useStateValue } from '../reducer/StateProvider'
import { Link } from 'react-scroll'


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

    const showPageNumbers = () => {
        return pages.map((page, index) => {
            return (
                <div onMouseEnter={() => setPageNumber(index)} className={page.name} key={index}>
                    <Link
                        className="header__navLink"
                        to="skills"
                        duration={400}
                        smooth={true}
                        activeClass="active"
                    >
                        <h1 >{page.value}</h1>
                    </Link>
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
