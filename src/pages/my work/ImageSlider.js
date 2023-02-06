import {useState} from "react";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative",
        marginTop: "1%"
    };

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        border: "solid",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].img})`
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '-25%',
        fontSize: '45px',
        color: 'black',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '-25%',
        fontSize: '45px',
        color: 'black',
        zIndex: 1,
        cursor: 'pointer'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>
            ❰
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
            ❱
        </div>
        <a href={slides[currentIndex].link} target="_blank">
            <div style={slideStyles}></div>
        </a>
    </div>
    )
}

export default ImageSlider;