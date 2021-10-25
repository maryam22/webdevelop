import React from 'react';
import defaultImage from "./images/absolutvision.jpg"






const CarouselPanl = (props) => {
  


    const btnContainer = {
      display: "inline-block",
      float: "right"
    };
    const btn = {
      border: "none",
      background: "gray",
      color: "white",
      fontSize: "22px",
      padding: "5px 10px",
      borderRadius: "10px",
      margin: "0 10px",
      

    };
    const img =  {
      width:"900px"
    };
    console.log(props)
    if (!props.article) return null
    return (
      <React.Fragment>
        <img src={props.article.urlToImage ? props.article.urlToImage : defaultImage } style={ img } alt="Sliderr_image" />
        <h3>{props.article.title}<a href={props.article.url} >Read more</a></h3>
        

        <h1>
          
          <span style={btnContainer}>
            <button style={btn} onClick={props.slidePrev}>
              {"<"} Prevs
            </button>
            |
            <button style={btn} onClick={props.slideNext}>
              {">"} Next
            </button>
          </span>
        </h1>
      </React.Fragment>
    );
  };

  
 
  export default CarouselPanl