import React from 'react'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Shop = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
  
    const photos = [
      {
        src: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?cs=srgb&dl=pexels-shattha-pilabut-135620.jpg&fm=jpg",
      },
      {
        src: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?cs=srgb&dl=pexels-pixabay-264636.jpg&fm=jpg",
      },
      {
        src: "https://st3.depositphotos.com/1017228/18070/i/600/depositphotos_180707314-stock-photo-happy-young-family-with-a.jpg",
      },
      {
        src: "https://plus.unsplash.com/premium_photo-1661596536275-3a69e49d2fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      },
      {
        src: "https://st2.depositphotos.com/1001279/9375/i/950/depositphotos_93757392-stock-photo-hong-kong-shopping-mall-interior.jpg",
      },
      {
        src: "https://st2.depositphotos.com/1010314/9567/i/600/depositphotos_95672418-stock-photo-la-prairie-luxury-anti-aging.jpg",
      },
    ];
  
    const handleOpen = (i) => {
      setSlideNumber(i);
      setOpen(true);
    };
  
    const handleMove = (direction) => {
      let newSlideNumber;
  
      if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
      } else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
      }
  
      setSlideNumber(newSlideNumber)
    };
  
    return (
      <div>
        <Navbar />
        <Header type="list" />
        <div className="shopContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img src={photos[slideNumber].src} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="shopWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="shopTitle">Tower Street Apartments</h1>
            <div className="shopAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Elton St 125 New york</span>
            </div>
            <span className="shopDistance">
              Excellent location – 500m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="shopImages">
              {photos.map((photo, i) => (
                <div className="shopImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="shopImg"
                  />
                </div>
              ))}
            </div>
            <div className="shopDetails">
              <div className="shopDetailsTexts">
                <h1 className="shopTitle">Stay in the heart of City</h1>
                <p className="shopDesc">
                 Hey! we supply all types of goods and stuffs to the doorstep of yours
                </p>
              </div>
              <div className="shopDetailsPrice">
                <h1>Perfect for a efficient buy!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  };
