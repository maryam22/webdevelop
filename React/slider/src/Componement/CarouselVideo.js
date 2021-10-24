import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CarouselPanl from "./CarouselPanl"
import CarouselPanlVideo from "./CarouselPanlVideo"
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Player } from 'video-react';
const { getJsonList, getJsonListFromUrlAsync } = require('iptv-list-to-json')

//function Carousel() {


    const CarouselVideo = (props) => {
        // 

        
        const [currentSlide, setCurrentSlide] = useState(0);
        const [news, setNews] = useState([]);
        const slideNext = (e) => {
            setCurrentSlide((prev) => {
                return prev + 1 === props.length ? 0 : currentSlide + 1;
            });
        };
        const slidePrev = (e) => {
            setCurrentSlide((prev) => {
                return prev === 0 ? props.length - 1 : currentSlide - 1;
            });
        };
        React.useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentSlide((prev) => {
                    return prev + 1 === props.length ? 0 : prev + 1;
                });
            }, 6000);
            return () => {

                clearInterval(intervalId);
            };
        }, []);

        useEffect(() => {

            getJsonListFromUrlAsync('https://iptv-org.github.io/iptv/categories/sports.m3u', function (error,list_in_json) {
            if(error) return console.log('Error: '+error.code); // If there is an error return a warning
            console.log(list_in_json); // If there is no an error show the list
            setNews(list_in_json)
        })
            
        }, [])
     
        
            
               
     
        
        
        return (
            <React.Fragment>
                <h1>
                    React Slider{" "}
                    <small>
                        <em>(we have {  news? news.length : 0} slides)</em>
                    </small>
                </h1>
                <CarouselPanlVideo
                    article={news[currentSlide]}
                    slideNext={slideNext}
                    slidePrev={slidePrev}
                />
            </React.Fragment>
        );
    };



 
    


export default CarouselVideo 