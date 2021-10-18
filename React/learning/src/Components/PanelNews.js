import React ,{ Component }from 'react'
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { colors } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

class PanelNews extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.IMAGE_PARTS = 4;
    
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;
    
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    console.log(this.state)
  }
  
  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }
  
  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }
  
  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }
  
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    if (!this.props.slides) return
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }
  
  render() {
    const { activeSlide, prevSlide, sliderReady, newsItem } = this.state;
    if (!this.props.news || this.props.news.length == 0) return null
    console.log(this.props.news)
    return (
      <div className={classNames('slider', { 's--ready': sliderReady })}>
        <p className="slider__top-heading">Travelers</p>
        <div className="slider__slides">
          {this.props.slides.map((slide, index) => (
            <div
              className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
              key={slide.city}
              >
                
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">{this.props.news[activeSlide].description}</h3>
                <h2 className="slider__slide-heading">
                {this.props.news[activeSlide].title}
                </h2>
                
               <p className="slider__slide-readmore"><a href={this.props.news[activeSlide].url} target="_blank" className="button bg-dark p-2" >Read more</a></p>
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${this.props.news[activeSlide].image})` }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      </div>
    );
  }
}

//ReactDOM.render(<PanelNews slides={slides} />, document.querySelector('#app'));


 export default PanelNews