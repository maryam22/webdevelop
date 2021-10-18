import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CarouselPanl from "./CarouselPanl"
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//function Carousel() {


    const Carousel = (props) => {
        //const [news, setNews] = useState([]);

        //useEffect(() => {
        //     fetch('https://api.currentsapi.services/v1/latest-news?language=en&apiKey=OWrdipYQ9gk4eQq1va3jzocqrS7xvVQTxAbLhCLkocLijp98')
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data.news)
        //             setNews(data.news)
        //         })
        // }, [])
        const [currentSlide, setCurrentSlide] = React.useState(0);
        const Slides = [
            {
                id: 1,
                title: "First Slide",
                link: "https://via.placeholder.com/750x350/FF0000/FFFFFF"
            },
            {
                id: 2,
                title: "Second Slide",
                link: "https://via.placeholder.com/750x350/00FF00/000000"
            },
            {
                id: 3,
                title: "Third Slide",
                link: "https://via.placeholder.com/750x350/0000FF/FFFFFF"
            },
            {
                id: 4,
                title: "Fourth Slide",
                link: "https://via.placeholder.com/750x350/F000F0/000000"
            }
        ];
        const slideNext = (e) => {
            setCurrentSlide((prev) => {
                return prev + 1 === Slides.length ? 0 : currentSlide + 1;
            });
        };
        const slidePrev = (e) => {
            setCurrentSlide((prev) => {
                return prev === 0 ? Slides.length - 1 : currentSlide - 1;
            });
        };
        React.useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentSlide((prev) => {
                    return prev + 1 === Slides.length ? 0 : prev + 1;
                });
            }, 4000);
            return () => {
                clearInterval(intervalId);
            };
        }, []);
        // useEffect(() => {

        //     fetch('https://api.currentsapi.services/v1/latest-news?language=en&apiKey=OWrdipYQ9gk4eQq1va3jzocqrS7xvVQTxAbLhCLkocLijp98')
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data.news)
        //             setNews(data.news)
        //         })
        // }, [])
        return (
            <React.Fragment>
                <h1>
                    React Slider{" "}
                    <small>
                        <em>(we have {Slides.length} slides)</em>
                    </small>
                </h1>
                <CarouselPanl
                    image={Slides[currentSlide]}
                    slideNext={slideNext}
                    slidePrev={slidePrev}
                />
            </React.Fragment>
        );
    };



    // return (
        
    //     <div className="carousel">
    //                             <small>
    //                     <em>(we have {props.length} slides)</em>
    //                 </small>
    //                 <CarouselPanl
    //                 image={Slides[currentSlide]}
    //                 slideNext={slideNext}
    //                 slidePrev={slidePrev}
    //             />
    //     </div>
    // )

//}


export default Carousel

