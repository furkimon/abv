import React, { useState } from 'react'
import '../assets/styles/SkillPages.css'
import { coffee, fire, lego, lightbulb, orange, squib } from '../assets/images'

const itemList = [
    {
        title: "LOREM IPSUM",
        description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        topImage: lego,
        bottomImage: coffee,
        styleTitle: {
            display : "none"
        },
        styleDescription: {
            display : "none"
        }
    },
    {
        title: "IPSUM LOREM",
        description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        topImage: fire,
        bottomImage: squib,
        styleTitle: {
            display : "none"
        },
        styleDescription: {
            display : "none"
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

const SkillPages = () => {
    const [items, setItems] = useState(itemList)
    const [step, setStep] = useState(1);

    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            setStep((step + 1 + items.length) % items.length);
            setItems(
                items.map((item, i) => {
                    const xPos = (i + step + 1) % items.length;
                        return {
                            ...item,
                            styleTop: 
                              xPos ===  0 
                              ? {animation : "visible-top 0.8s ease forwards"} 
                              : {animation : "invisible-top 0.8s ease forwards"},   

                            styleBottom: 
                              xPos ===  0 
                              ? {animation : "visible-bottom 0.8s ease forwards"}
                              : {animation : "invisible-bottom 0.8s ease forwards"},   

                            styleTitle: 
                              xPos === 0 
                              ? {animation : "fade-in 0.8s ease forwards"}
                              :  {animation : "fade-out 0.8s ease forwards"}, 

                            styleDescription: 
                              xPos === 0 
                              ? {animation : "fade-in 0.8s ease forwards"}
                              : {animation : "fade-out 0.8s ease forwards"},  
                        }
                    }))
        } else {
            setStep((step - 1 + items.length) % items.length);
            setItems(
                items.map((item, i) => {
                    const xPos = (i + step + items.length - 1) % items.length;
                    return{
                        ...item,
                        styleTop: 
                          xPos ===  0 
                          ? {animation : "visible-top2 0.8s ease forwards"} 
                          : {animation : "invisible-top2 0.8s ease forwards"},   

                        styleBottom: 
                          xPos ===  0 
                          ? {animation : "visible-bottom2 0.8s ease forwards"}
                          : {animation : "invisible-bottom2 0.8s ease forwards"},   

                        styleTitle: 
                          xPos === 0 
                          ? {animation : "fade-in 0.8s ease forwards"}
                          :  {animation : "fade-out 0.8s ease forwards"}, 

                        styleDescription: 
                          xPos === 0 
                          ? {animation : "fade-in 0.8s ease forwards"}
                          : {animation : "fade-out 0.8s ease forwards"},  
                    }
                })
            )
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
                            <div className="skill__title" style={item.styleTitle}>
                                {item.title}
                            </div>
                            <div className="skill__description" style={item.styleDescription}>
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
