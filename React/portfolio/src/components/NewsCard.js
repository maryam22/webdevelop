import React from 'react'
/*
{
    "id": "c949cc71-3c78-4653-890f-43cde4d956fa",
    "title": "Contagion fear grips global markets over China’s debt crisis - Times of India",
    "description": "India Business News: MUMBAI: Indian markets closed sharply lower on Monday with the sensex down 525 points at 58,491, weighed by a global selloff that had its origins in a.",
    "url": "https://timesofindia.indiatimes.com/business/india-business/contagion-fear-grips-global-mkts-over-chinas-debt-crisis/articleshow/86380790.cms",
    "author": "TNN",
    "image": "https://static.toiimg.com/thumb/msid-86386796,width-1070,height-580,imgsize-39690,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "language": "en",
    "category": [
        "business"
    ],
    "published": "2021-09-21 02:00:00 +0000"
}
*/
function NewsCard({single}) {
    const customStyle = {
        // {
        //     backgroundImage: `url(${single.image})`
        // }   
    }
    return (
        <div className="example-2 card">
            <div className="wrapper" style={single.image === 'None' ? {'background':`black`}:{'background':`url(${single.image})`}}>
                <div className="header">
                    <div className="date">
                        <span className="day">{single.published.substring(0,20)}</span>
                        
                    </div>
                    <ul className="menu-content">
                        {console.log(single.image)}
                       
                    </ul>
                </div>
                <div className="data">
                    <div className="content">
                        <span className="author">{single.author}</span>
                        <h3 className="title"><a href={single.url}>{single.title}</a></h3>
                        <p className="text">{single.description.substring(0,100)}</p>
                        <a href={single.url} target="_blank" className="button bg-dark p-2">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard