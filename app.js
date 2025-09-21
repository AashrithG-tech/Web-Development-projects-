const nextButton = document.getQuerySelector('.next-btn');
const video = document.getQuerySelector(".hero-video");

const moveList = ['hero-1.mp4','hero-2.mp4','hero-3.mp4','hero-4.mp4']

let index = 0
nextButton.addEventListener('click',function(){
    index += 1
    video.scr = moveList[index];

    if (index === 3){
        index = -1;
    }
})