import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../pages/News.css'
import NewsCard from '../components/NewsCard'



function Home() {

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
        <Container fluid={true}>
            <Row>
                <Col md={10} className="bg-dark text-light p-5">
               <div className="row">
                   {

                      news.map(singlenews=>(<NewsCard  single={singlenews}/>))


                   }
                   
               </div>  
                </Col>
                <Col md={2} className="bg-secondary text-light p-3">
                    <h1>sidebar</h1>
                </Col>
            </Row>
        </Container>

    )
}

export default Home
