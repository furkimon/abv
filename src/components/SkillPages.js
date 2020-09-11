import React, { useState } from 'react'
import '../assets/styles/SkillPages.css'
import { coffee, fire, lego, lightbulb, orange, squib } from '../assets/images'

const itemList = [
    {
        title: "LOREM IPSUM",
        description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        topImage: lego,
        bottomImage: coffee,
        styleTop: {
            transform: "translateY(10%)",
        },
        styleBottom: {
            transform: "translateY(-10%)",
        },
        styleTitle: {
            transform: "translateX(0)"
        },
        styleDescription: {
            transform: "translateX(0)"
        }
    },
    {
        title: "IPSUM LOREM",
        description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        topImage: fire,
        bottomImage: squib,
        styleTop: {
            transform: "translateY(10%)",
        },
        styleBottom: {
            transform: "translateY(-10%)",
        },
        styleTitle: {
            transform: "translateX(0)"
        },
        styleDescription: {
            transform: "translateX(0)"
        }
    },
    {
        title: "REMLO SUMIP",
        description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        topImage: lightbulb,
        bottomImage: orange,
        styleTop: {
            transform: "translateY(0)",
        },
        styleBottom: {
            transform: "translateY(0)",
        },
        styleTitle: {
            transform: "translateX(0)"
        },
        styleDescription: {
            transform: "translateX(0)"
        }
    }
]

let counter = itemList.length
const SkillPages = () => {
    const [items, setItems] = useState(itemList)
    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            counter < 2 ? counter = 1 : counter--
            setItems(
                items.map((item, index) => {
                    console.log(index)
                    if (counter === index) {
                        console.log("counter : " + counter)
                        return {
                            ...item,
                            styleTop: {
                                transform: "translateY(-100%)",
                            },
                            styleBottom: {
                                transform: "translateY(100%)",
                            },
                            styleTitle: {
                                transform: "translateX(120%)"
                            },
                            styleDescription: {
                                transform: "translateX(120%)"
                            }
                        }
                    } else if (index === counter - 1) {
                        return {
                            ...item,
                            styleTop: {
                                transform: "translateY(0)",
                            },
                            styleBottom: {
                                transform: "translateY(0)",
                            },
                            styleTitle: {
                                transform: "translateX(0)"
                            },
                            styleDescription: {
                                transform: "translateX(0)"
                            }
                        }
                    } else {
                        return { ...item }
                    }
                }
                )
            )
            console.log(items)
        } else {
            counter > 1 ? counter = 2 : counter = counter
            setItems(
                items.map((item, index) => {
                    if (counter === index) {
                        console.log("counter : " + counter)
                        return {
                            ...item,
                            styleTop: {
                                transform: "translateY(0)",
                            },
                            styleBottom: {
                                transform: "translateY(0)",
                            },
                            styleTitle: {
                                transform: "translateX(0)"
                            },
                            styleDescription: {
                                transform: "translateX(0)"
                            }
                        }
                    
                    } else if (index === counter - 1) {
                        return {
                            ...item,
                            styleTop: {
                                transform: "translateY(10%)",
                            },
                            styleBottom: {
                                transform: "translateY(-10%)",
                            },
                            styleTitle: {
                                transform: "translateX(0)"
                            },
                            styleDescription: {
                                transform: "translateX(0)"
                            }
                        }
                    } else {
                        return { ...item }
                    }
                })
            )
            counter++
            console.log(items)
        }

    }

    const showItemList = () => {
        return (
            items.map((item, i) => {
                return (
                    <div key={i} className="skill__">
                        <div className="__imagesSection">
                            <div className="topImage" style={item.styleTop}>
                                <img src={item.topImage} alt="" />
                            </div>
                            <div className="bottomImage" style={item.styleBottom}>
                                <img src={item.bottomImage} alt="" />
                            </div>
                        </div>
                        <div className="__infoSection">
                            <div className="title" style={item.styleTitle}>
                                {item.title}
                            </div>
                            <div className="description" style={item.styleDescription}>
                                {item.description}
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
    return (
        <div className="skillPages" onWheel={handleWheel}>
            {showItemList()}
        </div>
    )
}

export default SkillPages
