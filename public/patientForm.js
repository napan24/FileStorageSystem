let progress=document.getElementById("progress");
let song=document.getElementById("song");
let ctrl=document.getElementById("ctrl");

song.onloadedmetadata=function(){
  progress.max=song.duration;
  progress.value=song.currentTime;
}
ctrl.addEventListener("click",handleClick);
function handleClick(){
    if(ctrl.classList.contains("fa-play"))
    {
        song.play();
        ctrl.classList.remove("fa-play");
        ctrl.classList.add("fa-pause");
    }
    else{
        song.pause();
        ctrl.classList.add("fa-play");
        ctrl.classList.remove("fa-pause");
    }
}

if(song.play())
{
    setInterval(() => {
        progress.value=song.currentTime;
    }, 500);
}

progress.onchange=function(){
   song.play();
   song.currentTime=progress.value;
   ctrl.classList.remove("fa-play");
   if(!ctrl.classList.contains("fa-pause")){
    ctrl.classList.add("fa-pause");
   }
}

song.onended=function(){
    song.load();
    ctrl.classList.add("fa-play");
    ctrl.classList.remove("fa-pause");
};