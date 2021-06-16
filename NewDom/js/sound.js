// const soundkeys =  document.querySelectorAll('.key');
// const soundkey =  document.getElementsByClassName('.keys');

// console.log(soundkeys)
// console.log(soundkey)

// function SoundSelector(){
// soundkeys.addEventListener("click",function(){

//     if(soundkey.ChildNode)
//     switch(soundkey.ChildNode)
// }
// )


// }

let audioItems = document.querySelectorAll('audio')
//console.log(audioItems)
function playSound(key){

    audioItems.forEach(audio =>{
        let audio_key = audio.getAttribute ('data-key')
        if (audio_key == key){

            audio.play();
        }

    })

}
//playSound('70')
const soundkeys =  document.querySelectorAll('.key').forEach(btn=>{console.log("here"+btn)
    let audioKey = btn.getAttribute ('data-key'); 
    console.log(audioKey)
    btn.addEventListener('click',function(e){
   // console.log(e.target.parentElement)
    playSound(audioKey)

    })



})

