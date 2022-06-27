console.log("Welcome to spotify");
//initilae variables
let songindex=0;
let audioelement = new Audio('song/0.mp3');
let masterplay = document.getElementById('MasterPlay');
let myprogressbar=document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"Not Afraid - Eminem ",filePath:"song/0.mp3",coverPath:"cover/0.jfif"},
    {songName:"As it was - Harry Styles ",filePath:"song/1.mp3",coverPath:"cover/1.jfif"},
    {songName:"Dandellions - Ruth B ",filePath:"song/2.mp3",coverPath:"cover/2.jfif"},
    {songName:"Shape Of You - Ed Sheeran ",filePath:"song/3.mp3",coverPath:"cover/3.jfif"},
    {songName:"High on life - Martin Garrix ",filePath:"song/4.mp3",coverPath:"cover/4.jfif"},
]
songitems.forEach((element,i)=>{
    console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("SongName")[0].innerText=songs[i].songName;
})
// handle play/paues/click
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
//update seekbar
progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value * audioelement.duration/100;

})
const makeallplays = ()=>{
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
element.addEventListener('click',(e)=>{
    makeallplays();
    songindex= parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioelement.src=`song/${songindex-1}.mp3`;
    mastersongname.innerText=songs[songindex-1].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})
})
document.getElementById('next').addEventListener('click',()=>{
if(songindex>=4){
    songindex=0;
}
else{
    songindex+=1;
}
audioelement.src=`song/${songindex}.mp3`;
    mastersongname.innerText=songs[songindex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=4;
    }
    else{
        songindex-=1;
    }
       audioelement.src=`song/${songindex}.mp3`;
       mastersongname.innerText=songs[songindex].songName;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})
