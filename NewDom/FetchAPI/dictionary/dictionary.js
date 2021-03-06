
// API SERVICE: https://dictionaryapi.dev/ > no need api key 
// API SERVICE: https://dictionaryapi.dev/ > no need api key
let API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/hello "
const btnDefault = document.querySelector(".btn-default")
const uiBox = document.querySelector(".ui-box")
const jumbotronx = document.querySelector(".jumbotronx")
const search = document.querySelector("#search")
const option = document.querySelector("#option")






class DictionaryApplication {

    constructor(lang, word) {
        //this.langUrl=`https://api.dictionaryapi.dev/api/v2/entries/${lang}/hello`
        this.wordUrl = `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
        this.weatherUrl = `http://localhost:30038/api/weatherforecast`

    }

    async getLangugeAndWord() {
        let res = await fetch(this.wordUrl)
        let data = res.json();
        return data


    }

    async getWeather() {
        let res = await fetch(this.weatherUrl)
        let data = res.json();
        return data


    }
}


function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}





btnDefault.addEventListener('click', function (e) {
    e.preventDefault();

    let weather2 = document.querySelector("#weather2")

    let dic = new DictionaryApplication(option.value, search.value)
    
    dic.getWeather().then(result => {
        weather2

        result.forEach(data => {
            let g = (c) => document.createElement(c)
            let h3 = g("h3")
            let date = new Date(data.date);
            setAttributes(h3, { "class": "word-text" })
            h3.innerText = `${date.toLocaleDateString("en-gb")} - ${data.summary} (${data.temperatureC}C)`
            weather2.appendChild(h3)


        });
    });

    dic.getLangugeAndWord().then(result => {

        while (uiBox.hasChildNodes()) {
            uiBox.removeChild(uiBox.firstChild);
        }
     
         
        result.forEach(data => {
            let g = (c) => document.createElement(c)
            let h3 = g("h3")
            setAttributes(h3, { "class": "word-text" })
            h3.innerText = `${data.word}`
            uiBox.appendChild(h3)

            let snap = g("snap")
            setAttributes(snap, { "class": "pronunciation-text d-block mb-1", "style": "color: #808080;" })
            if (data.phonetics[0].text) {
                snap.innerText = `${data.phonetics[0].text}`
            }
            else {
                snap.innerText = "n/a"
            }
            uiBox.appendChild(snap)

            let a = g("a")
            setAttributes(a, { "id": "play-pause-button", "class": "fa fa-play" })
            uiBox.appendChild(a)

            let div1 = g("div")
            setAttributes(div1, { "id": "definitions-container" })
            uiBox.appendChild(div1)

            let div2 = g("div")
            setAttributes(div2, { "class": "row", "style": "border-top: solid 1px #e6e6e6", "padding": "10px 0" })
            div1.appendChild(div2)

            let div3 = g("div")
            setAttributes(div3, { "class": "col-sm-9 my-auto definition" })
            div2.appendChild(div3)

            let i = g("i")
            div3.appendChild(i)

            let br1 = g("br")
            div3.appendChild(br1)
            i.innerText = "noun"

            let hr = g("hr")
            let br2 = g("br")

            data.meanings.forEach(meaning => {

                meaning.definitions.forEach(definition => {

                    if (definition.definition) {
                        div3.innerText = `${definition.definition}`
                    }
                    if (definition.example) {
                        div3.innerText += `e.g. ${definition.example}`
                    }

                    div3.appendChild(hr)
                });

            });

        });

    });

})

