import React from 'react'
import './myWork.css'

//ALL MY APP IMAGES
import ImageSlider from "./ImageSlider.js" 
import imgQuiz from "./assets/MSUCodingQuiz.png";
import imgNoteTaker from "./assets/MSUNoteTaker.png";
import imgPWGenerator from "./assets/MSUPasswordGenerator.png";
import imgWeatherDB from "./assets/MSUWeatherDashboard.png";
import imgWorkDay from "./assets/MSUWorkDayScheduler.png";


const MyWork = () => {
    const slides = [
        {img: `${imgQuiz}`, title: "Coding Quiz", link: "https://vegascruz.github.io/MSU-Code-Quiz/"}, 
        {img: `${imgNoteTaker}`, title: "Note Taker", link: "https://msu-notetaker.herokuapp.com/"},
        {img: `${imgPWGenerator}`, title: "Password Generator", link: "https://vegascruz.github.io/MSU-PasswordGenerator/"},
        {img: `${imgWeatherDB}`, title: "Weather Dashboard", link: "https://vegascruz.github.io/MSU-WeatherAPI-Dashboard/"},
        {img: `${imgWorkDay}`, title: "Work Day Scheduler", link: "https://vegascruz.github.io/MSU-Workday-Scheduler/"}
    ];

    
    const containerStyles = {
        width: '500px',
        height: '280px',
        margin: '0 auto'
    }
  return (
    <>
        <h1 className="text-6xl py-2 text-teal-600 font-medium dark:text-teal-400 text-center">My Work</h1>
        <div>
            <div style={containerStyles}>
                    <ImageSlider slides={slides}/>
            </div>
        </div>
    </>
  )
}

export default MyWork