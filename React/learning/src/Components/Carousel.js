import React, { useEffect, useState } from 'react';
import $ from 'jquery'
import './Carousel.css'
import { images } from '../Helpers/CarouselData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import CarouselApplication from '../Helpers/CarouselData'
import './PanelNews.css'
import PanelNews from './PanelNews'


function Carousel() {

   // let API_URL = "https://api.currentsapi.services/v1/latest-news?language=en&apiKey=OWrdipYQ9gk4eQq1va3jzocqrS7xvVQTxAbLhCLkocLijp98"

    //const [news, setNews] = useState([]);
    

    //const getCountryAndLanguage = async () => {
    //     let res = await fetch(API_URL
    //         // {
    //         // headers: {
    //         //     "x-rapidapi-host": "google-news1.p.rapidapi.com",
    //         //     "x-rapidapi-key": "cb26b50518msh5b4c3c26220680ep1c9c0ajsn7370efa55865",
    //         //     "X-RapidAPI-Proxy-Secret":"8c48a840-2b51-11ec-a625-a935cfc38c07"
    //         // }
    //         //}
    //     )
    //     let data = res.json();
    //     //  console.log(data)
    //     return data

    // }

    // useEffect(() => {
    //     getCountryAndLanguage()
    //         .then(data => {
    //             console.log(data.news)
    //             setNews(data.news)
    //         })
    // }, [])

    const [news, setNews] = useState([]);

    useEffect(() => {
          
          //fetch('https://api.currentsapi.services/v1/latest-news?language=en&apiKey=OWrdipYQ9gk4eQq1va3jzocqrS7xvVQTxAbLhCLkocLijp98')
         .then(res=>res.json())
         .then(data=>{
             console.log(data.news)
             setNews(data.news)
         })
    }, [])


    return (
        <div className="carousel">
            <PanelNews slides= {slides} news={news} />

      
            <div id="app"></div>
            <a href="https://dribbble.com/shots/3774469-T-R-A-V-E-L-E-R" target="_blank" class="icon-link">
                <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png"/>
            </a>
            <a href="https://twitter.com/NikolayTalanov" target="_blank" class="icon-link icon-link--twitter">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"/>
            </a>

        </div>
    
          
    )
}

const slides = [
    {
      city: 'Paris',
      country: 'France',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
    },
    {
      city: 'Singapore',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
    },
    {
      city: 'Prague',
      country: 'Czech Republic',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
    },
    {
      city: 'Amsterdam',
      country: 'Netherlands',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
    },
    {
      city: 'Moscow',
      country: 'Russia',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
    },
  ];
export default Carousel;
