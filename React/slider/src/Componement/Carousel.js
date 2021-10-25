import React, { useEffect, useState } from 'react';
import CarouselPanl from "./CarouselPanl"
import 'bootstrap/dist/js/bootstrap.bundle.min';

//function Carousel() {


    const Carousel = () => {
        // 
        
        const [currentSlide, setCurrentSlide] = useState(0);
        const [news, setNews] = useState([]);


        
  const slideNext = (e) => {
    setCurrentSlide((prev) => {
        
        if (news == null){

            return currentSlide+1
        }
        return prev + 1 === news.length ? 0 : currentSlide + 1;
    });
};
const slidePrev = (e) => {
    setCurrentSlide((prev) => {
      
        if (news == null){

            return currentSlide-1
        }

        return prev === 0 ? news.length - 1 : currentSlide -1 ;
    });
};
useEffect(() => {
  
}, []);
      
        useEffect(() => {

                fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d3ca5fab3c99469ba519b17354f7978e')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setNews(data.articles)
                })
                // const intervalId = setInterval(() => {
                //     setCurrentSlide((prev) => {
                //         return prev + 1 === news[currentSlide].length ? 0 : prev + 1;
                //     });
                // }, 6000);
                // return () => {
                //     clearInterval(intervalId);
                // };
        }, [])
        
        return (
            <React.Fragment>
                <h1>
                    {/* React Slider{" "} */}
                    <small>
                        <em>we have {news ? news.length : 0} news</em>
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
