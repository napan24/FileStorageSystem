import React from "react";
import song from "../resources/whydoi.mp3";
import musicImage from "../resources/music-img.jpeg";
let music=new Audio(song);
function MusicPlayer(){
    const [playerButton,setPlayerButton]=React.useState("fa-solid fa-play fa-3x");
    const [toPlay,setPlay]=React.useState(false);
    const [rangeValue,setRangeValue]=React.useState(music.currentTime);
    // const [temp,setTemp]=React.useState(0);
    function playmusic()
    {
        if(toPlay===true)
        {
            music.play();
            setPlayerButton("fa-solid fa-pause fa-3x");
            
        }
        else{
            music.pause();
            setPlayerButton("fa-solid fa-play fa-3x");
        }
    }
    function handlePlayButton(event){
        setPlay(!toPlay);
         playmusic();
         
         setInterval(function(){setRangeValue(music.currentTime);},500);
    }
    function handleRangeChange(event){
        setPlay(true);
        music.currentTime=event.target.value;
        playmusic();
    }
    
    music.onended=function(){
        setPlay(false);
        music.currentTime=0;
        setPlayerButton("fa-solid fa-play fa-3x");
        setRangeValue(0);
    };
    return (
        <div class="audiodiv">
          <div class="control" onClick={handlePlayButton}>
            <i class={playerButton} id="ctrl"></i>
          </div>
          <input onChange={handleRangeChange} type="range" min="0" value={rangeValue} max={music.duration} id="progress"/>
        </div>  
    );
}

export default MusicPlayer;

 