import React from 'react';
import ReactHlsPlayer from 'react-hls-player';


const CarouselPanlVideo = (props) => {
  const btnContainer = {
    display: "inline-block",
    float: "right",
    margin: "10px"
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
  const img = {
    width: "200px"
  };
  const videoContainer = {
    display: "flex",
    height: "600px !important",
    width: "900px !important"
  };
  console.log(props)
  if (!props.article) return null


  return (
    <React.Fragment>
      <img src={props.article.img ? props.article.img : "defaultImage"} alt="Sliderr_image" />
      <h1>{props.article.channel_name}</h1>
      <h2>{props.article.group}</h2>
      <div style={videoContainer}>
        <ReactHlsPlayer
          src={props.article.video_url}
          hlsConfig={{
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            lowLatencyMode: true,
            controls: true,
            autoPlay: true,
            height: 720,
            width: 900
          }}
        />
      </div>
      <div>
        <span style={btnContainer}>
          <button style={btn} onClick={props.slidePrev}>
            {"<"} Prevs
          </button>
          |
          <button style={btn} onClick={props.slideNext}>
            {">"} Next
          </button>
        </span>
      </div>
    </React.Fragment>
  );

};


// ReactDOM.render(<App />, document.querySelector("#root"));

export default CarouselPanlVideo