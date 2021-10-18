
const image = 'https://picsum.photos/595/700'
const image1 = 'https://picsum.photos/595/700'
const image2 = 'https://picsum.photos/595/700'


export const images = [
    {title:"photo 1",subtitle:"This is photo 1",img :image},
    {title:"photo 2",subtitle:"This is photo 2 ",img :image1},
    {title:"photo 3",subtitle:"This is photo 3",img :image2}
]

let API_URL = "https://google-news1.p.rapidapi.com/top-headlines?country=US&lang=en&limit=50"


class CarouselApplication{

    //  constructor(country,language)
    //  {
    //     this.languageUrl = `https://google-news1.p.rapidapi.com/top-headlines?country=${country}&lang=${language}&limit=50`
        

    //  }
    constructor()
    {
        this.api_url = API_URL;
    }
    async getCountryAndLanguage()
    {
     let res = await fetch(this.API_URL)
     let data = res.json();
     console.log(data)
     return data

    }
}





export default CarouselApplication;
