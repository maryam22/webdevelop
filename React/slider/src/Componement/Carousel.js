import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CarouselPanl from "./CarouselPanl"
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//function Carousel() {


    const Carousel = (props) => {
        // 
        
        const [currentSlide, setCurrentSlide] = useState(0);
        const [news, setNews] = useState([]);

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
            }, 4000);
            return () => {
                clearInterval(intervalId);
            };
        }, []);
        useEffect(() => {

                fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d3ca5fab3c99469ba519b17354f7978e')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setNews(data.articles)
                })
        }, [])
        
        return (
            <React.Fragment>
                <h1>
                    React Slider{" "}
                    <small>
                        <em>(we have {news ? news.length : 0} slides)</em>
                    </small>
                </h1>
                <CarouselPanl
                    article={news[currentSlide]}
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
