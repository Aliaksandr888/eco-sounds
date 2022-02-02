const btnImg = document.querySelector('.btn-play');
let birds = document.querySelectorAll('.nav-list_item');
const solovey = document.querySelector('#solovey');
const drozd = document.querySelector('#drozd');
const zarynka = document.querySelector('#zarynka');
const javoronok = document.querySelector('#javoronok');
const slavka = document.querySelector('#slavka');
const main = document.querySelector('.main')
const logo = document.querySelector('#forest');

logo.classList.add('active');//класс по умодчению

// смена кнопки пуска
function changeBtnPlay(){
    btnImg.classList.toggle('btn-pause');
    if(btnImg.classList.length === 1){
        pauseAudio()
    }else{
        playAudio()
    }
}
btnImg.addEventListener('click', changeBtnPlay);

//смена фонового изображения
function changeImage(){
        main.style.backgroundImage = `url(assets/img/${this.id}.jpg)`;
        birds.forEach((elem)=>elem.classList.remove('active'));
        this.classList.add('active');
        audio.src = `assets/audio/${this.id}.mp3`;
        if(btnImg.classList.length === 1){
            pauseAudio()
        }else{
            playAudio()
        }
};
birds.forEach((item)=>{
    item.addEventListener('click', changeImage)
});

//audio
const audio = document.querySelector('audio');
function playAudio() {
  audio.currentTime = 0;
  audio.play();
}
function pauseAudio() {
  audio.pause();
}
