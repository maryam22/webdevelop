import React from 'react';
import ReactDOM from 'react-dom';
import defaultImage from "./images/absolutvision.jpg"






const CarouselPanl = (props) => {
    const btnContainer = {
      display: "inline-block",
      float: "right"
    };
    const btn = {
      border: "none",
      background: "blue",
      color: "white",
      fontSize: "22px",
      padding: "5px 10px",
      borderRadius: "10px",
      margin: "0 10px"
    };
    console.log(props)
    if (!props.article) return null
    return (
      <React.Fragment>
        <img src={props.article.urlToImage ? props.article.urlToImage : defaultImage} alt="Sliderr_image" />
        <h1>{props.article.title}</h1>

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

  
 // ReactDOM.render(<App />, document.querySelector("#root"));

  export default CarouselPanl