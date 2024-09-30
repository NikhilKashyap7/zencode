import React, { Fragment, useState, useEffect } from "react";
import carimg1 from '../images/web-feature.jpg'
import carimg2 from '../images/website-development-process-scaled.jpg'

function Mymainpage(){
  const [slider, setSlider] = useState(0);
  const data = [
    { image: carimg1, buttonText: "More details..."},
    { image: carimg2, buttonText: "Book Appoinment"},
  ];

  const getSlide = (index) => {
    setSlider(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prevIndex) => (prevIndex + 1) % data.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [data.length]);

  const handleButtonClick = () => {
    alert(`Button clicked for slide ${slider + 1}`); 
  };

  return (
    <Fragment>
      <div className="slider">
        <div className="slider-img">
          <img
            src={data[slider].image}
            alt={`Slide ${slider + 1}`}
            style={{ width: "100%", height: "100vh" }}/>
          <button className="slider-button" onClick={handleButtonClick}>
            {data[slider].buttonText}
          </button>
          <div className="slider-btn">
            {data.map((_, index) => (
              <div
                key={index}
                className={`s-btn ${slider === index ? 'active' : ''}`}
                onClick={() => getSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Mymainpage